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
import Box from '@mui/material/Box';
import useProduct from '../../Hook/useProduct';
import {Link} from 'react-router-dom'

const Product = () => {

    const [Service] = useProduct();

    return (
        <div>
           <Container>
      <Box sx={{ width: '100%',mt:5,mb:5}}>
        <Grid container rowSpacing={1} columnSpacing={{xs:12, sm: 12, md:3,lg:4,xl:4 }}>

   
          {  
               Service.slice(0,6).map(services => <Grid item lg={4} xl={4} sm={12} md={4} xs={12}
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
           <Link style={{textDecoration:'none'}} to={`/singleOrder/${services._id}`}>
           <Button style={{marginLeft:130,backgroundColor:'tomato',color:'black'}} size="large">Buy Now</Button>
           </Link>
        </CardActions>
         </Card>            
         </Grid>)
          }
         

          
        </Grid>
      </Box>
      </Container>
        </div>
    );
};

export default Product;