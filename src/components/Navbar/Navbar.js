import React from 'react';
import {Nav,Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import useAuth from '../../Hook/useAuth';


const Navbar = () => {
   
   const {user,userSignOut} = useAuth()

    return (
         <div style={{ backgroundColor: '#F9F9FB' }}>

        <Nav className="navbar navbar-expand-lg container navbar-light p-4 ">
        <NavLink className="navbar-brand fs-3 fw-bold" to="/">ToolsMaster</NavLink>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navsection" id="navbarSupportedContent">
          <ul className="navbar-nav ms-5 ps-5">
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/explore">Explore</NavLink>
            </li>
            <li className="nav-item">
              {user?.email && <NavLink className="nav-link fw-bold pe-4" to="/dashboard">DashBoard</NavLink>}
            </li>
            <li className="nav-item">
            {user.email ? <NavLink to="/home"><Button onClick={userSignOut} variant="secondary">Login Out</Button>
            </NavLink> : <NavLink  to="/login" ><Button variant="secondary">Log in Here</Button>
            </NavLink>}
            </li>
          </ul>
      
        </div>
      </Nav>
      
      
      
              </div>
    );
};

export default Navbar;