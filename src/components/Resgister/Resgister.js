import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography,Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import {useHistory} from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from '../Navbar/Navbar';

const Resgister = () => {

    const [logindata,setlogindata] = useState({})
    const history = useHistory();

    const {user,registerUser,isLoading,error} = useAuth()

    const handleOnBlur = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...logindata};
        newLoginData[field] = value;
        setlogindata(newLoginData);
    }

    
    const handlelogin = (e)=>{
      e.preventDefault();

      return  registerUser(logindata.name,logindata.email, logindata.password,history);
     }

    return (
        <div>
           <Navbar></Navbar>
          <Container>
        <Grid container spacing={2}>
          <Grid sx={{mt:10, ml:40}} item xs={12} md={6}>
           <Typography sx={{pb:2}} variant="body1" gutterBottom>
           Sign up
           </Typography>
          {!isLoading && <form  action="" onSubmit={handlelogin}>

           <TextField
            sx={{width: '75%'}}
             id="standard-basic4"
             label="Your Name"
             variant="standard"
             name="name"
             onBlur={handleOnBlur}
             />

           <TextField
           sx={{width: '75%'}}
             id="standard-basic1"
             label="Your Email"
             variant="standard"
             name="email"
             onChange={handleOnBlur}
             />
              <TextField
               sx={{width: '75%'}}
             id="standard-basic2"
             label="Password"
             variant="standard"
             type="password"
             name="password"
             onChange={handleOnBlur}
             />
              <NavLink style={{textDecoration:'none'}} to="/login" ><Button color="inherit">Already Registered? Please LogIn</Button></NavLink>
              <Button type="submit" sx={{width: '75%',mt:2}} variant="contained">Sign up</Button>
           </form>}
           {isLoading && <CircularProgress />}
           {user?.email &&  <Alert style={{marginLeft: '70px',marginTop: '30px'}} severity="success">Sign Up success</Alert>}
           {error &&  <Alert style={{marginLeft: '70px',marginTop: '30px'}} severity="error">somethin is wrong. please try again</Alert>}
        
         </Grid>
           
          </Grid>
       </Container>

          
          <Footer></Footer>
        </div>
    );
};

export default Resgister;