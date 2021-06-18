import React from 'react'
import { Carousel } from 'react-bootstrap';
import learningboy from '../assets/learningboy.jpg'
import schoollab from '../assets/codebreaker.jpg'
import schoolOpening from '../assets/schoolopening.jpg'
import wholeClass from '../assets/wholeclassaerial.jpg'
import '../carousel.css'

export default function SlideShow() {
    return (
    <div className=" h-screen w-full">
        
        <div className="h-screen ">
            <Carousel>
  <Carousel.Item>
    <img
      className="image-caroussel-size w-100 resize-carousel h-screen"
      src={schoolOpening}
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
      src={wholeClass}
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
