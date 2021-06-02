import React from 'react'
import { Carousel } from 'react-bootstrap';
import basketball from '../assets/basketball.jpg'
import focusgirl from '../assets/focusgirl.jpg'
import learningboy from '../assets/learningboy.jpg'
import schoollab from '../assets/schoollab.jpg'
import '../carousel.css'

export default function SlideShow() {
    return (
    <div className=" h-full w-full">
        
        <div className="h-full">
            <Carousel>
  <Carousel.Item>
    <img
      className="image-caroussel-size w-100 resize-carousel"
      src={learningboy}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We give more than education</h3>
      <p>Give a proper heritage of education to your child at EIK.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image-caroussel-size w-100 resize-carousel"
      src={learningboy}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Start you journey</h3>
      <p>Join EIK today</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image-caroussel-size w-100 resize-carousel"
      src={focusgirl}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Start you journey</h3>
      <p>Join EIK today</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-full resize-carousel"
      src={schoollab}
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
