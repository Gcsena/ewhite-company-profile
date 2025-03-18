import { useEffect } from 'react';


import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import ekles1 from '../images/ekles1.jpg'
import ekles3 from '../images/ekles3.jpg'
import coa from '../images/coa.jpg'
import sisilia from '../images/sisilia.jpg'
import wulandari from '../images/wulandari.jpg'
import rosmayanti from '../images/rosmayanti.jpg'
import samantha from '../images/samantha.jpg'
import erina from '../images/erina.jpg'
import andisaminah from '../images/andisaminah.png'
import delya from '../images/delya.png'
import coamix from '../images/coamix.png'
import carousel from '../components/carousel';





const About = () => {
 
  // the carousel logic
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //for scrolldown animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);


  return (
    <main className="about">

      <div className='carouselAbout'>  
      <Carousel activeIndex={index} onSelect={handleSelect} interval={4000}>
      <Carousel.Item className='gradient'>
        <img
          className="d-block w-100 carouselImg"
          src={coamix}
          alt="First slide"
        />
        <Carousel.Caption>
           {/* <h3 className='carouselCaption'>ABOUT US</h3> */}
          <p className='carouselP'>SIAPAKAH DIBALIK DR.EWHITE?</p> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='gradient'>
        <img
          className="d-block w-100 carouselImg"
          src={coa}
          alt="Second slide"
        />
        <Carousel.Caption>
           {/* <h3 className='carouselCaption'>ABOUT US</h3> */}
          <p className='carouselP'>APA ITU COA DAN PERAN PENTING YANG MEREKA PEGANG</p> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='gradient'>
        <img
          className="d-block w-100 carouselImg"
          src={ekles3}
          alt="Third slide"
        />
        <Carousel.Caption>
           {/* <h3 className='carouselCaption'>ABOUT US</h3> */}
          <p className='carouselP'>MENGENAL DR.EKLES LEBIH DEKAT</p> 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
      </div>

      <div className="dokterContainer">
      <h1 className="dokterHeader">DR.EKLES</h1>
      <div className="dokterImg">
        <img className="dokterImg" src={ekles1} alt="dr. Eklendro Youns Yohanes Senduk" />
      </div>
      <p className="dokterTxt">
        <b>Produk DREWHITE</b> dikembangkan oleh <b>dr. Eklendro Youns Yohanes Senduk, D.AAAM, M.Kes</b> lulusan <i>American Academy of Aesthetic Medicine</i> yang juga dikenal dengan Celebrity Doctor serta dijuluki sebagai <b>doctorpreneur</b> yang expert di bidang estetika. Produk DREWHITE menghadirkan minuman collagen yang akan menjadikan kulit Anda menjadi sehat dan cantik. Bagi kami, kulit Anda adalah investasi masa depan Anda. Dengan kulit yang sehat, dapat meningkatkan aspek kehidupan Anda. Untuk mendapatkan kulit yang sehat sangat ekonomis dengan DREWHITE.
      </p>
    </div>
      <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
        <h2 className="coaTitle hidden">CHIEF OPERATION AREA</h2>
        <p className='coaP hidden'>Berperan sebagai sosok yang memegang peran penuh terhadap tanggung jawab dalam mengatur dan mengelola pengembangan distrik baik dalam mapping wilayah, branding dan selling. 
COA hanya terdiri dari 1 orang dari setiap distrik yang terpilih secara langsung oleh Owner DREWHITE. Selain itu, berkuasa penuh atas kepemilikan member yang terdapat di kota/distrik member setempat.</p>
      </div>


{/* POLAROID */}
<div className="wrapper" style={{backgroundColor: '#FFE2EB'}}>
  <div className="itemPola">
    <div className="polaroid"><img src={sisilia} alt='img' />
      <div className="captionPola">SISILIA<br/>CHIEF OPERATIONAL AREA BANTEN<br/>A 001 DR</div>
    </div>
  </div>
  <div className="itemPola">
    <div className="polaroid"><img src={samantha} alt='img'/>
      <div className="captionPola">SAMANTHA<br/>CHIEF OPERATIONAL AREA BOGOR<br/>F 001 DR</div>
    </div>
  </div>
  <div className="itemPola">
    <div className="polaroid"><img src={wulandari} alt='img'/>
      <div className="captionPola">WULANDARI<br/>CHIEF OPERATIONAL AREA BANDUNG<br/>D 001 DR</div>
    </div>
  </div>
  <div className="itemPola">
    <div className="polaroid"><img src={rosmayanti} alt='img'/>
      <div className="captionPola">ROSMAYANTI<br/>CHIEF OPERATIONAL AREA SURABAYA<br/>L 001 DR</div>
    </div>
  </div>
  <div className="itemPola mb-5">
    <div className="polaroid"><img src={erina} alt='img'/>
      <div className="captionPola">ERINA<br/>CHIEF OPERATIONAL AREA BEKASI<br/>C 001 DR</div>
    </div>
  </div>
  <div className="itemPola mb-5">
    <div className="polaroid"><img src={andisaminah} alt='img'/>
      <div className="captionPola">SAMIHAH<br/>CHIEF OPERATIONAL AREA JAMBI<br/>BH 001 DR</div>
    </div>
  </div>
  <div className="itemPola mb-5">
    <div className="polaroid"><img src={delya} alt='img'/>
      <div className="captionPola">DELYA<br/>CHIEF OPERATIONAL AREA SUKABUMI<br/>FA 001 DR</div>
    </div>
  </div>
</div>



    </main>
  )
}

export default About