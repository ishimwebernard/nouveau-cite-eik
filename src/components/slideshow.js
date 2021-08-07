import React from 'react'
import { Carousel } from 'react-bootstrap';
import learningboy from '../assets/learningboy.jpg'
import schoollab from '../assets/codebreaker.jpg'
import schoolOpening from '../assets/schoolopening.jpg'
import wholeClass from '../assets/wholeclassaerial.jpg'
import '../carousel.css'
let french = localStorage.getItem('language') == 'FR'

export default function SlideShow() {
    return (
    <div className=" w-full md:px-8">
        
        <div className=" ">
            <Carousel>
  <Carousel.Item>
    <img
      className=" w-100 resize-carousel"
      src={schoolOpening}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{french ? "Un habitat loin du domicile":"A home away from home"}</h3>
      <p>{french ? "Donnez un bon héritage d'éducation à votre enfant à l'EIK.": "Give a proper heritage of education to your child at EIK."}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-100 resize-carousel"
      src={learningboy}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>{french ? "Nous donnons une éducation de qualité":"We give quality education"}</h3>
      <p>{french ? "Donnez un bon héritage d'éducation à votre enfant à l'EIK.": "Give a proper heritage of education to your child at EIK."}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-100 resize-carousel"
      src={wholeClass}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>{french ? "Commencez votre voyage":"Start you journey"}</h3>
      <p>{french ? "Rejoignez EIK aujourd'hui":"Join EIK today"}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-full resize-carousel"
      src={schoollab}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>{french ? "Différentes méthodes d'apprentissage":"Different learning methods"}</h3>
      <p>{french ? "Rejoignez EIK aujourd'hui":"Join EIK today"}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    </div>
    )
}
