import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Grid from '@mui/material/Grid';
import { Container, Typography,Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Navbar from '../Navbar/Navbar';
import {useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const LogIn = () => {
  const [logindata,setlogindata] = useState({})

  const {user,userLogIn,isLoading,error} = useAuth();
   
  const location = useLocation();
  const history = useHistory();


   const handleOnchnage = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...logindata};
    newLoginData[field] = value;
    setlogindata(newLoginData);
    }


    
    const handlelogin = (e) => {
      userLogIn(logindata.email,logindata.password,location,history)

      e.preventDefault();
    }



    return (
        <div>
            <Navbar></Navbar>
            <Container>
        <Grid container spacing={2}>
          <Grid sx={{mt:10, ml:40}} item xs={12} md={6}>
           <Typography sx={{pb:2}} variant="body1" gutterBottom>
            Log In
           </Typography>
           <form  action="" onSubmit={handlelogin}>
           <TextField
           sx={{width: '75%'}}
             id="standard-basic1"
             label="Your Email"
             variant="standard"
             name="email"
             onChange={handleOnchnage}
             />
              <TextField
               sx={{width: '75%'}}
             id="standard-basic2"
             label="Password"
             variant="standard"
             type="password"
             name="password"
             onChange={handleOnchnage}
             />
             <NavLink style={{textDecoration:'none'}} to="/register" ><Button color="inherit">New user? Please Register</Button></NavLink>
              <Button type="submit" sx={{width: '75%',mt:2}} variant="contained">Log In</Button>
              {isLoading && <CircularProgress />}
              {user?.email &&  <Alert style={{marginLeft: '70px',marginTop: '30px'}} severity="success">This is a success alert — check it out!</Alert>}
              {error &&  <Alert style={{marginLeft: '70px',marginTop: '30px'}} severity="error">This is an error alert — check it out!</Alert>}
           </form>
           
         </Grid>
          </Grid>
       </Container>








          <div>
          <Footer></Footer>
          </div>
        </div>
    );
};

export default LogIn;