import React, { useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../../app/styles/image.module.css';
import produk2 from '/public/images/produk2.jpg';
import produk3 from '/public/images/produk3.jpg';
import produk4 from '/public/images/produk4.jpg';
import model from '/public/images/model.jpg';
import model2 from '/public/images/model2.png';


export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="controlled-carousel-container">
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <Image 
        className={`${styles.carouselProduk} d-block`}
        src={produk2}
        alt="First slide"
      />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image 
          className={`${styles.carouselProduk} d-block`}
          src={produk3}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image 
          className={`${styles.carouselProduk} d-block`}
          src={produk4}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}


export const CarouselHome = () =>  {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="d-block">
        <Image className={styles.carouselProduk}
          src={model2}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="d-block">
        <Image className={styles.carouselProduk}
          src={model}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="d-block">
        <Image className={styles.carouselProduk}
          // src={modelWomenEye}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}