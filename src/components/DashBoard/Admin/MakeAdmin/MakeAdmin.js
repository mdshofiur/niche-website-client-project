import React, { useState } from 'react';
import {TextField,Button} from '@mui/material';

const Makeadmin = () => {

const [email,setEmail] = useState('');



const handleOnBlur = e => {
    const emails = e.target.value;
    setEmail(emails);
}



const handleAdminSubmit = e => {
 const user = {email};

    fetch('https://intense-ridge-65532.herokuapp.com/users/admin',{
        method: 'PUT',
        headers: { 
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if(data.modifiedCount === 1){
             alert("Sucessfully Admin Added");
        }
    });

   
    e.preventDefault();
}



    return (
        <div style={{marginTop:'40px'}}>
              <form onSubmit={handleAdminSubmit} action="">
              <TextField 
               id="filled-basic"
               sx={{width: '40%'}}
               size="small"
               onBlur={handleOnBlur}
               label="Email" 
               />  
               <Button  sx={{marginLeft:'20px'}} type="submit" variant="contained">Make Admin</Button>
              </form>
        </div>
    );
};

export default Makeadmin;