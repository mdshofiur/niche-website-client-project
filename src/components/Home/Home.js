import React from 'react';
import {Carousel} from 'react-bootstrap'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';

const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="slider">
        <Carousel>
        <Carousel.Item interval={3000}>
        <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/0111/9115/6794/files/tools01.jpg?v=1569648771" alt="First slide"/>
        <Carousel.Caption>
        <h1>Hand Tools</h1>
        <h1>Power Saw Machine</h1>
      </Carousel.Caption>
      </Carousel.Item>
     <Carousel.Item>
     <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/0111/9115/6794/files/tools03.jpg?v=1569648845" alt="Second slide"/>
      <Carousel.Caption>
      <h1>New Eletric Sander</h1>
      <h1>Sander GWS.</h1>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
     <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/0111/9115/6794/files/tools02.jpg?v=1569648782" alt="Second slide"/>
      <Carousel.Caption>
      <h1>Are You Best Tools</h1>
      <h1>Safety Tools</h1>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
     </div>

       
       <div>
             <Product></Product>
       </div>



     <Footer></Footer>
        </div>
       
    );
};

export default Home;