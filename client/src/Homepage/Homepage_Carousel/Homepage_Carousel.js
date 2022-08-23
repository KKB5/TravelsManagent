import React from "react";
import "./Homepage_Carousel.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Homepage_Carousel_1 from './Homepage_Carousel_1.jpg';
import Homepage_Carousel_2 from './Homepage_Carousel_2.jpg';
import Homepage_Carousel_3 from './Homepage_Carousel_3.jpg';



export function Homepage_Carousel() {
  return (
    
    <Carousel fade>
      <Carousel.Item>
        <img
          className="Carousel_Image"
          src={Homepage_Carousel_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="Carousel_Font">
          <h3>The new way to plan your next trip</h3>
          <p>Create a fully customized day by day itinerary for free</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Carousel_Image"
          src={Homepage_Carousel_2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="Carousel_Font">
          <h3>Easy to use, easy to browse</h3>
          <p>Create a fully customized day by day itinerary for free</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Carousel_Image"
          src={Homepage_Carousel_3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="Carousel_Font">
          <h3>Trending destinations</h3>
          <p>Create a fully customized day by day itinerary for free</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>    
    </Carousel>
    
    
    
  );
}




