import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useProduct from '../../Hook/useProduct';
import {Link} from 'react-router-dom'

export default function Explore() {

  const [Service] = useProduct();

    return (
        <div>
            <Navbar></Navbar>
        <Container>
      <Box sx={{ width: '100%',mt:5,mb:5}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

   
          {  
               Service.map(services => <Grid item xs={4}
               key={services._id}> 
               
               <Card sx={{ maxWidth: 330,my:2 }}>
        <CardMedia
          component="img"
          sx={{height:200}}
          image={services.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {services.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {services.desc}
          </Typography>
        </CardContent>
        <CardActions>
           <h4 style={{marginLeft:30,color:'tomato'}}>${services.price}</h4>
            <Link to={`/singleOrder/${services._id}`}>
           <Button style={{marginLeft:130,backgroundColor:'tomato',color:'black'}} size="large">Buy Now</Button>
           </Link>
        </CardActions>
         </Card>            
         </Grid>)
          }
         

          
        </Grid>
      </Box>
      </Container>
      

      <Footer></Footer>
        </div>
    );
  }