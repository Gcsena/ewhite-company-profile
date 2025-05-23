import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import produk2 from '../images/produk2.jpg';
import produk3 from '../images/produk3.jpg';
import produk4 from '../images/produk4.jpg';
import model from '../images/model.jpg';
import model2 from '../images/model2.png';
// import modelWomenEye from '../images/model/modelWomenEye.jpg';

export const ControlledCarousel = () =>  {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="controlled-carousel-container">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className=''>
        <img
          className="d-block carouselProduk "
          src={produk2}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img
          className="d-block carouselProduk"
          src={produk3}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img
          className="d-block carouselProduk"
          src={produk4}
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
    </div>
  );
}


export const CarouselHome = () =>  {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
  <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block carouselProduk"
          src={model2}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselProduk"
          src={model}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselProduk"
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
    </div>
  );
}

// THE CAROUSEL TEMPLATE

// export const Caro = () =>  {
// $('section.awSlider .carousel').carousel({
// 	pause: "hover",
//   interval: 2000
// });

// var startImage = $('section.awSlider .item.active > img').attr('src');
// $('section.awSlider').append('<img src="' + startImage + '">');

// $('section.awSlider .carousel').on('slid.bs.carousel', function () {
//  var bscn = $(this).find('.item.active > img').attr('src');
// 	$('section.awSlider > img').attr('src',bscn);
// });

// return (
// <section className="awSlider">
//   <div className="carousel slide" data-ride="carousel">
//     {/* Indicators */}
//     <ol className="carousel-indicators">
//       <li data-target=".carousel" data-slide-to={0} className="active" />
//       <li data-target=".carousel" data-slide-to={1} />
//       <li data-target=".carousel" data-slide-to={2} />
//       <li data-target=".carousel" data-slide-to={3} />
//     </ol>
//     {/* Wrapper for slides */}
//     <div className="carousel-inner" role="listbox">
//       <div className="item active">
//         <img src="http://www.adobewordpress.com/wp-content/uploads/2014/02/wallpaper-thumb-941.jpg" />
//         <div className="carousel-caption">Görsel #1</div>
//       </div>
//       <div className="item">
//         <img src="http://www.adobewordpress.com/wp-content/uploads/2014/02/wallpaper-thumb-101.jpg" />
//         <div className="carousel-caption">Görsel #2</div>
//       </div>
//       <div className="item">
//         <img src="http://www.adobewordpress.com/wp-content/uploads/2014/02/wallpaper-thumb-1051.jpg" />
//         <div className="carousel-caption">Görsel #3</div>
//       </div>
//       <div className="item">
//         <img src="http://www.adobewordpress.com/wp-content/uploads/2013/07/wallpaper-thumb-74.jpg" />
//         <div className="carousel-caption">Görsel #4</div>
//       </div>
//     </div>
//     {/* Controls */}
//     <a className="left carousel-control" href=".carousel" role="button" data-slide="prev">
//       <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
//       <span className="sr-only">Geri</span>
//     </a>
//     <a className="right carousel-control" href=".carousel" role="button" data-slide="next">
//       <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
//       <span className="sr-only">İleri</span>
//     </a>
//   </div>
// </section>

// );
// }


export default {ControlledCarousel, CarouselHome};