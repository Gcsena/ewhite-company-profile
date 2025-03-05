"use client"; //make this page become client component,so we can use the hooks


import { useEffect } from 'react';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../app/styles/image.module.css'


import Carousel from 'react-bootstrap/Carousel';
import ekles1 from '/public/images/ekles1.jpg'
import ekles3 from '/public/images/ekles3.jpg'
import coa from '/public/images/coa.jpg'
import sisilia from '/public/images/sisilia.jpg'
import wulandari from '/public/images/wulandari.jpg'
import rosmayanti from '/public/images/rosmayanti.jpg'
import samantha from '/public/images/samantha.jpg'
import erina from '/public/images/erina.jpg'
import andisaminah from '/public/images/andisaminah.png'
import delya from '/public/images/delya.png'
import coamix from '/public/images/coamix.png'





const About = () => {
 
  // the carousel logic
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number, e: any) => {
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
        <div className='d-block w-100'>
        <Image
          className={styles.carouselImg}
          src={coamix}
          alt="First slide"
          
        />
        </div>
        <Carousel.Caption>
           <h3 className='carouselCaption'>ABOUT US</h3>
          <p className='carouselP'>SIAPAKAH DIBALIK DR.EWHITE?</p> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='gradient'>
        <div className='d-block w-100'>
        <Image
          className={styles.carouselImg}
          src={coa}
          
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
           <h3 className='carouselCaption'>ABOUT US</h3>
          <p className='carouselP'>SIAPAKAH DIBALIK DR.EWHITE?</p> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='gradient'>
      <div className='d-block w-100'>        
        <Image
          className={styles.carouselImg}
          src={ekles3}
          alt="Third slide"
          
        />
        </div>
        <Carousel.Caption>
           <h3 className='carouselCaption'>ABOUT US</h3>
          <p className='carouselP'>SIAPAKAH DIBALIK DR.EWHITE?</p> 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
      </div>

      <div className="dokterContainer">
  <h1 className="dokterHeader">DR.EKLES</h1>
  <div className="dokterImg">
    <Image className={styles.dokterImg} src={ekles1} alt="img" />
  </div>
  <p className="dokterTxt">
    <b>produk DREWHITE</b> dikembangkan oleh <b>dr.Eklendro Youns Yohanes Senduk,D.AAAM, M.Kes</b> lulusan <i>American Academy Of Aesthetic Medicine</i> yang juga dikenal dengan Celebrity Doctor serta dijuluki sebagai <b>doctorpreneur</b> yang expert di bidang estetika. produk DREWHITE menghadirkan minuman collagen yang akan menjadikan kulit anda menjadi sehat dan cantik. Bagi kami kulit Anda adalah investasi masa depan Anda. Dengan kulit yang sehat dapat meningkatkan aspek kehidupan anda. Untuk mendapatkan kulit yang sehat sangat ekonomis dengan DREWHITE.
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
    <div className="polaroid"><Image src={sisilia}  alt="img" /> 
      <div className="captionPola">SISILIA<br/>CHIEF OPERATIONAL AREA BANTEN<br/>A 001 DR</div>
    </div>
  </div>
  <div className="itemPola">
    <div className="polaroid"><Image src={samantha}  alt="img" />
      <div className="captionPola">SAMANTHA<br/>CHIEF OPERATIONAL AREA BOGOR<br/>F 001 DR</div>
    </div>
  </div>
  <div className="itemPola">
    <div className="polaroid"><Image src={wulandari}  alt="img" />
      <div className="captionPola">WULANDARI<br/>CHIEF OPERATIONAL AREA BANDUNG<br/>D 001 DR</div>
    </div>
  </div>
  <div className="itemPola">
    <div className="polaroid"><Image src={rosmayanti}  alt="img" />
      <div className="captionPola">ROSMAYANTI<br/>CHIEF OPERATIONAL AREA SURABAYA<br/>L 001 DR</div>
    </div>
  </div>
  <div className="itemPola mb-5">
    <div className="polaroid"><Image src={erina}  alt="img" />
      <div className="captionPola">ERINA<br/>CHIEF OPERATIONAL AREA BEKASI<br/>C 001 DR</div>
    </div>
  </div>
  <div className="itemPola mb-5">
    <div className="polaroid"><Image src={andisaminah}  alt="img" />
      <div className="captionPola">SAMIHAH<br/>CHIEF OPERATIONAL AREA JAMBI<br/>BH 001 DR</div>
    </div>
  </div>
  <div className="itemPola mb-5">
    <div className="polaroid"><Image src={delya}  alt="img" />
      <div className="captionPola">DELYA<br/>CHIEF OPERATIONAL AREA SUKABUMI<br/>FA 001 DR</div>
    </div>
  </div>
</div>



    </main>
  )
}

export default About