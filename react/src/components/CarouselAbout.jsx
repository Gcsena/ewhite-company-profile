import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import ekles from '../images/ekles.jpg'
import coa from '../images/coa.jpg'
import coamix from '../images/coamix.png'
const slides = [
    {
      image: coamix,
      title: 'Slide 1 Title',
      description: 'Slide 1 Description'
    },
    {
      image: coa,
      title: 'Slide 2 Title',
      description: 'Slide 2 Description'
    },
    {
      image: ekles,
      title: 'Slide 3 Title',
      description: 'Slide 3 Description'
    }
  ];
  
  export const CarouselAbout = () =>  {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);
  
    const handleSelect1 = (selectedIndex, e) => {
      setIndex1(selectedIndex);
    };
  
    const handleSelect2 = (selectedIndex, e) => {
      setIndex2(selectedIndex);
    };
  
    const handleSelect3 = (selectedIndex, e) => {
      setIndex3(selectedIndex);
    };
  
    return (
      <div>
        <Carousel activeIndex={index1} onSelect={handleSelect1} interval={5000}>
          {slides.map((slide, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100 carouselImg"
                src={slide.image}
                alt={`Slide ${i + 1}`}
              />
              <Carousel.Caption className="carouselText">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
  
        <Carousel activeIndex={index2} onSelect={handleSelect2} interval={5000}>
          {slides.map((slide, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100 carouselImg"
                src={slide.image}
                alt={`Slide ${i + 1}`}
              />
              <Carousel.Caption className="carouselText">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
  
        <Carousel activeIndex={index3} onSelect={handleSelect3} interval={5000}>
          {slides.map((slide, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100 carouselImg"
                src={slide.image}
                alt={`Slide ${i + 1}`}
              />
              <Carousel.Caption className="carouselText">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
  
  export default { CarouselAbout };