import React from 'react'
import { Carousel } from 'react-bootstrap';
import girl from '../assets/Image13.jpg'
import school from '../assets/Image9.jpg'

export default function SlideShow() {
    return (
    <div className=" h-full w-full">
        
        <div className="h-full">
            <Carousel>
  <Carousel.Item>
    <img
      className="image-caroussel-size w-100 "
      src={girl}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We give more than education</h3>
      <p>Give a proper heritage of education to your child at EIK.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image-caroussel-size w-100"
      src={school}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Start you journey</h3>
      <p>Join EIK today</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    </div>
    )
}
