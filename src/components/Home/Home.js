import React from 'react';
import {Carousel,Container} from 'react-bootstrap'
import Footer from '../Footer/Footer';
import HomeReview from '../HomeReview/HomeReview';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';
import {Col,Card,Row,Button} from 'react-bootstrap'

const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="slider">
        <Carousel>
        <Carousel.Item interval={3000}>
        <img className="d-block  w-100" src="https://cdn.shadesoflight.com/media/W1siZiIsIjIwMjEvMDYvMDIvMTMvNTMvMzEvNzc5L1NsaWRlc2hvd19KdW5lMjEuanBnIl0sWyJwIiwib3B0aW0iXV0/Slideshow_June21.jpg?sha=3ddac02784e19527" alt="First slide"/>
        <Carousel.Caption>
        <h1>Seating That's</h1>
        <h1>Guest Ready</h1>
      </Carousel.Caption>
      </Carousel.Item>
     <Carousel.Item>
     <img className="d-block w-100" src="https://cdn.shadesoflight.com/media/W1siZiIsIjIwMjEvMTAvMjcvMTAvMjYvMTQvNDIzL1NsaWRlc2hvd19PY3QyMS5qcGciXSxbInAiLCJvcHRpbSJdXQ/Slideshow_Oct21.jpg?sha=4add87de9fa33606" alt="Second slide"/>
      <Carousel.Caption>
      <h1>Exclusive new designs.</h1>
      <h1>100's of designer patterns</h1>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
     <img className="d-block w-100" src="https://cdn.shadesoflight.com/media/W1siZiIsIjIwMjEvMTAvMDcvMTAvMjYvMjEvMzQvU2xpZGVzaG93X09jdDIxLmpwZyJdLFsicCIsIm9wdGltIl1d/Slideshow_Oct21.jpg?sha=20facf6b66411a28" alt="Second slide"/>
      <Carousel.Caption>
      <h1>The New Look Of Excellence.</h1>
      <h1>Colors on fixtures and lamps</h1>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
     </div>

       
       <div> 
       <Container>
       <h2 style={{textAlign: 'center',paddingTop: '60px'}}><span style={{backgroundColor:'#748D19',padding:'5px 20px',borderRadius:'5px',color:'white'}}>Our Most Populer Items</span></h2>
  
       </Container>
             <Product></Product>
       </div>


        <div className="me-4">
        <h1 style={{textAlign: 'center',paddingTop: '20px',paddingBottom: '40px'}}><span style={{backgroundColor:'black',padding:'5px 20px',borderRadius:'5px',color:'white'}}>Clients Says</span></h1>
          <Container>
          <HomeReview></HomeReview>
          </Container>
        </div>

        <div>
        <div className="mt-5">
 <h1 className="container text-primary">Featured Blog &amp; News
</h1>
<Container className="mt-5">
<Row xs={1} md={3} sm={2} className="g-4">
<Col>
<Card>
<Card.Img  height="220" variant="top" src="https://m.media-amazon.com/images/I/91OY-fFgX+L._AC_SX342_SY445_.jpg" />
<Card.Body>
<Card.Title>Hezbjiti Christmas String Lights Outdoor</Card.Title>
<Card.Text>
<p className="text-start"> Widely Use: The 394ft/120m SUPER long string light is perfect for indoor and outdoor of anywhere you want to decorate.</p>
<button className="btn btn-primary ms-5 ps-5 pe-5">Learn More...</button>
</Card.Text>
</Card.Body>
</Card>
</Col>

<Col>
<Card>
<Card.Img height="220" variant="top" src="https://m.media-amazon.com/images/I/61RxSlF6eCL._AC_SL1500_.jpg" />
<Card.Body>
<Card.Title>hykolity 13 inch Flush Mount LED Ceiling Light Fixture</Card.Title>
<Card.Text>
<p className="text-start">HIGH PERFORMANCE - This modern light fixtures easily mounts flush with the ceiling, and the low profile design keeps it out of.</p>
<button className="btn btn-primary ms-5 ps-5 pe-5">Learn More...</button>
</Card.Text>
</Card.Body>
</Card>
</Col>

<Col>
<Card>
<Card.Img height="220" variant="top" src="https://m.media-amazon.com/images/I/81wbVz9yhrL._AC_SL1500_.jpg" />
<Card.Body>
<Card.Title>Energizer 36521, Battery Operated, Soft White, Push</Card.Title>
<Card.Text>
<p className="text-start"> Compact, portable and lightweight. This push activated puck light can be used under cabinet, drawer, closet,  pantry shelf. </p>
<button className="btn btn-primary ms-5 ps-5 pe-5">Learn More...</button>
</Card.Text>
</Card.Body>
</Card>
</Col>

<Col>
<Card>
<Card.Img height="220" variant="top" src="https://m.media-amazon.com/images/I/71n1PLZUd5L._AC_SL1500_.jpg" />
<Card.Body>
<Card.Title>20 Pack LED Fairy Lights Battery Operated</Card.Title>
<Card.Text>
<p  className="text-start">The mini starry string lights illuminate a warm white light, which create a romantic atmosphere and are perfect to decorate your</p>
<button className="btn btn-primary ms-5 ps-5 pe-5">Learn More...</button>
</Card.Text>
</Card.Body>
</Card>
</Col>

</Row>
</Container>
</div>
        </div>

     <Footer></Footer>
        </div>
       
    );
};

export default Home;