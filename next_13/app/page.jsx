"use client"; //make this page become client component,so we can use the hooks

import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


// import  Accordion  from '../components/accordion.jsx';
// import CarouselHome from '../components/carousel.jsx';
import Popup from './components/Popup.jsx';





// for scrolldown animation
const Home = () => {
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
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    //clean up observer function for prevent unexpected behaviour*not fixed yet 
    return () => observer.disconnect();
  }, []);
  
    return (
    <main> 
  <Popup />    

  <div className='containerA' style={{paddingBottom: '10em', position: 'relative', display: 'flex'}}>
     <div className="row">  {/*col-xl-6 col-lg-6 col-md-6 col-sm-1 col-1 */}
      <div className="col-xl col-lg col-md-1"> 
        <h1 className='headerA hidden' style={{color:'#DA2A52'}}> Nikmati Rasa Manis<br />Raspberry</h1>
         <h1 className='headerA hidden' style={{color:'#32A642'}}>DREWHITE</h1> 
          <p className='paragrafA hidden'>Perkenalkan minuman kolagen rasa raspberry terbaru dari kami!<br />Kini Anda dapat menikmati manfaat dari kolagen berkualitas tinggi <br />dan rasa buah yang segar dalam setiap tegukan dapat menutrisi tubuh<br /> dan memanjakan kulit anda yang segar dalam setiap tegukan dapat<br /> menutrisi tubuh dan memanjakan kulit anda.</p>
        <Link href='products' rel="noopener noreferrer">
        <button className='redbtnC btnAnimate hidden' >LEARN MORE</button>
       </Link>
      </div>
      <div className="col-xl-6 col-lg-6">
        <Image className='imgA' src='/images/model2.png' width={200} height={200} alt="Avatar" />
         {/* <CarouselHome />  */}
      </div>
      </div>
    {/* </div> */}
  </div>

  <div className='containerB' style={{padding: '0 7em 5em 7em', position: 'relative', display: 'flex'}}>
    <div className="row">
      <div className="col-xl-4">
         <Image className="imgB" src="/images/produk.png" width={200} height={200} alt="Avatar" /> 
      </div>
      <div className="textwrapB col-xl-5">
   
<div className="roller">
  <h1
    className="headerB hidden"
    id="rolltext-2"
    style={{ fontFamily: "var(--font-playfair)" }}
  >
    <span>Rp 99.000-</span>
    <br />
    <span style={{marginBottom: '1em', marginTop: '1em'}}>DREWHITE</span>
    <br />
    <span>Rp 99.000-</span>
  </h1>
</div>
        <p className='paragrafB hidden'>DREWHITE adalah minuman serbuk untuk kesehatan dan kecantikan.DREWHITE terbuat dari perpaduan bahan-bahan berkualitas yang memiliki banyak khasiat.</p>
        <h6 className='paragrafB hidden'style={{fontFamily: 'var(--font-playfair)', fontSize: '22px'}}>Ingredients</h6>  
        <p className='paragrafB hidden'>Ekstrak Buah Beri Merah (Blueberry, Blackberry, Raspberry), Collagen Tripeptide, Red Beet, Inulin, L-Glutathione, Asorbic Acid (Vitamin C),Lycopene, Grapeseed, Vitamin A&E (Retinol), Vitamin B3 (Niacin)</p>
        <Link href="products" rel="noopener noreferrer">
        <button className='redbtn hidden'>DETAIL PRODUCT</button>
        </Link>
        </div>
      </div>
  </div>

  <div className='containerC'>
  <div className='row'>
    <Image className='col Halal' src='/images/halal1.svg' width={200} height={200} alt="halal" />
    <Image className='col Halal' src='/images/halal2.svg' width={200} height={200} alt="halal" />
    <Image className='col Halal' src='/images/halal3.svg' width={200} height={200} alt="halal" />
    <Image className='col Halal' src='/images/ha.svg' width={200} height={200} alt="halal" />
    <Image className='col Halal' src='/images/halal5.svg' width={200} height={200} alt="halal" />
  </div>
  </div>
   <div className='containerApaYang'>
    <div className="row">
      <div className="col-xl-6" >
        <h1 className='apayang1 hidden'>Apa yang membuat</h1>
        <h1 className='apayang2 hidden'>DREWHITE berbeda?</h1>
        <p className='apayangP hidden'>Banyak penelitian yang membuktikan bahwa kolagen memiliki manfaat dalam membantu mengencangkan kulit, mencegah penuaan dini, sekaligus mengurangi kulit kering dan keriput. Kolagen juga berperan penting dalam proses penyembuhan luka,selain mengandung kolagen DREWHITE juga mengandung L-Glutathione dan Bifidobacterium Longum yang memiliki banyak manfaat.</p>
      </div>
      <div className="col-6">
      <Image className="imgC" src='/images/modelWomenEye.png' width={200} height={200}  alt="Avatar" />
      </div>
      </div>
      
      <div className="row kolagen">
        <div className="col-xl-4 col-lg-4 col-md ">
        <Image className='komposisi' src='/images/komposisi3.svg' width={200} height={200} alt='link' />
          <h6 className='header2C hidden'>Collagen Tripeptide </h6>
          <p className='paragrafC hidden'>Kolagen memiliki manfaat dalam membantu mengencangkan kulit, mencegah penuaan dini, sekaligus mengurangi kulit kering dan keriput.</p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md ">
        <Image className='komposisi' src='/images/komposisi2.svg' width={200} height={200} alt='link' />
          <h6 className='header2C hidden'>L-Glutathione</h6>
          <p className='paragrafC hidden'>Glutathione penting bagi kesehatan, diantaranya mencegah kerusakan sel tubuh, memperbaiki sel dan jaringan tubuh yang rusak, serta menunjang sistem kekebalan tubuh.</p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md ">
        <Image className='komposisi' src='/images/komposisi1.svg' width={200} height={200} alt='link' />
          <h5 className='header2C hidden'>Bifidobacterium Longum</h5>
          <p className='paragrafC hidden'>Bifidobacterium longum yang kebal antibiotik dapat membantu mengobati penyakit radiasi. Dapat mencegah pertumbuhan bakteri berbahaya yang menyebabkan infeksi dan menetralkan racun di usus.</p>
        </div>
      </div>  
     </div>

  <div className='containerE'>
    <div className='row' >
      <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
        <Image className='model4' src='/images/model/model4.png' width={200} height={200} alt="Avatar" /> 
        </div>  
        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
        <h2 className='headerE'>FREQUENTLY ASKED QUESTIONS</h2>
        {/* { <Accordion /> } */}
        </div>
      </div>
    </div> 

    <div className='containerLink'>
      <p className='OrderText'>&ldquo; Temukan Kulit Sehat Dan Bersinar Dengan Produk Collagen Kami,<br />Tersedia Di Marketplace Favoritmu! &rdquo; </p>
      <div className='row linkWrapper'>
        <div className='col-xl col-lg col-md-4 col-sm-6 col-7 linkComponent hidden' >
          <Image className='imgLink' src='../images/shopee.svg' width={200} height={200} alt="link" />
          <Link href="https://shp.ee/78mv6wi" target="_blank" rel="noopener noreferrer"><button className='btnLink btnAnimate'>ORDER VIA<br />SHOPEE</button></Link>
        </div>
        <div className='col-xl col-lg col-md-4 col-sm-6 col-7 linkComponent hidden'>
          <Image className='imgLink' src='../images/tokped.svg' width={200} height={200} alt="link" />
          <Link href="https://tokopedia.link/drewhiteofficial" target="_blank" rel="noopener noreferrer"><button className='btnLink btnAnimate'>ORDER VIA<br />TOKOPEDIA</button></Link>
        </div>
        <div className='col-xl col-lg col-md-4 col-sm-6 col-7 linkComponent hidden'>
          <Image className='imgLink' src='../images/whatsapp.svg' width={200} height={200} alt="link" />
          <Link href="https://api.whatsapp.com/send/?phone=081211118412&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><button className='btnLink btnAnimate'>ORDER VIA<br />WHATSAPP</button></Link>
        </div>
        <div className='col-xl col-lg col-md-4 col-sm-6 col-7 linkComponent hidden'>
          <Image className='imgLink' src='../images/tiktok.svg' width={200} height={200} alt="link" />
          <Link href="https://vt.tiktok.com/ZS8XWCvL8/" target="_blank" rel="noopener noreferrer"><button className='btnLink btnAnimate'>ORDER VIA<br />TIKTOK</button></Link>
        </div>
      </div>
    </div>
</main>
  )
}



export default Home