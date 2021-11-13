import * as React from 'react'; 
import {useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';



export default function HomeReview() {
  
const [value,setValue] = useState([])

   useEffect(() => {
    fetch('https://intense-ridge-65532.herokuapp.com/review')
    .then(response => response.json())
    .then(data => setValue(data))
   },[])

  
 
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
      {value.map((value, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            MS
          </Avatar>
        }
        action={
            <Box
             sx={{mt:1}}>
           <Rating  name="simple-controlled" value={value.rating} onChange={(event, newValue) => {setValue(newValue);}}/>
           </Box>
        }
        title={value.name}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {value.comment}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
  );
}
