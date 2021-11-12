import React from 'react';
import { Redirect, Route } from 'react-router';
import {Spinner} from 'react-bootstrap'
import './PrivateRoute.css'
import useAuth from '../../Hook/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    const {user,isLoading} =useAuth()

    if(isLoading){
        return (
           <div className="spinner-private">
           <Spinner animation="border" variant="info" />
            </div>
        )

    }

    return (
        <Route
        {...rest}
        render={({location}) => user.email? children: 
        <Redirect
        to={{
           pathname: "/login",
           state: { from: location }
        }}
        ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;