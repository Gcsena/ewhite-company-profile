import { useEffect, useState } from 'react';

import { Accordion } from '../components/accordion.jsx';
import { CarouselHome } from '../components/carousel.jsx';
import amanda from '../images/amanda.png'

import edit5 from '../images/edit5.png'
import edit4 from '../images/edit4.png'
import model4 from '../images/model/model4.png'
import produk from '../images/produk.png'
import gambar3 from '../images/gambar3.png'
import halal1 from '../images/halal1.svg'
import halal2 from '../images/halal2.svg'
import halal3 from '../images/halal3.svg'
import halal4 from '../images/halal4.svg'
import ha from '../images/ha.svg'
import halal5 from '../images/halal5.svg'
import komposisi1 from '../images/komposisi1.svg'
import komposisi2 from '../images/komposisi2.svg'
import komposisi3 from '../images/komposisi3.svg'
import tiktok from '../images/tiktok.svg'
import tokped from '../images/tokped.svg'
import whatsapp from '../images/whatsapp.svg'
import shopee from '../images/shopee.svg'
import '../App.css';
import { Layout } from 'antd';



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

  // responsive containerA design* handle the multiple html design
  const [isDesktop, setIsDesktop] = useState(true);

  const checkScreenSize = () => {
    if (window.innerWidth > 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <main>


      <div className="containerA">
        {isDesktop ? (
          // Desktop Layout
          <div className="row align-items-center desktop-layout" style={{ padding: '3em', marginBottom: '10em' }}>
            <div className="col-xl-6 col-lg-6 col-md-12 text-container">
              <h1 className="headerA" style={{ color: "#DA2A52" }}>
                Nikmati Rasa Manis<br />Raspberry DREWHITE
              </h1>
              {/* <h1 className="headerA" style={{ color: "#32A642" }}>
              DREWHITE
            </h1> */}
              <p className="paragrafA">
                Perkenalkan minuman kolagen rasa raspberry terbaru dari kami! Kini Anda dapat menikmati manfaat dari kolagen berkualitas tinggi dan rasa buah yang segar dalam setiap tegukan, dapat menutrisi tubuh dan memanjakan kulit Anda.
              </p>
              <a href="products" rel="noopener noreferrer">
                <button className="redbtnC btnAnimate">LEARN MORE</button>
              </a>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 text-center">
              <img className="imgA" src={edit5} alt="Avatar" />
            </div>
          </div>
        ) : (
          // Mobile & Tablet Layout
          <div className="row mobile-layout">
            <div className="col-12 text-container">
              <h1 className="headerA" style={{ color: "#DA2A52" }}>
                Nikmati Rasa Manis Raspberry Drewhite
              </h1>
              {/* <h1 className="headerA" style={{ color: "#32A642" }}>
              DREWHITE
            </h1> */}
            </div>

            <div className="col-12 text-center">
              <img className="imgA" src={edit5} alt="Avatar" />
            </div>

            <div className="col-12 paragrafA">
              <p>
                Perkenalkan minuman kolagen rasa raspberry terbaru dari kami! Kini Anda dapat menikmati manfaat dari kolagen berkualitas tinggi dan rasa buah yang segar dalam setiap tegukan, dapat menutrisi tubuh dan memanjakan kulit Anda.
              </p>
            </div>

            <div className="col-12 text-center">
              <a href="products" rel="noopener noreferrer">
                <button className="redbtnC btnAnimate">LEARN MORE</button>
              </a>
            </div>
          </div>
        )}
      </div>

      <div className='containerB' style={{ padding: '0 7em 5em 7em', position: 'relative', display: 'flex' }}>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-3">
            <img className="imgB" src={produk} alt="Avatar"></img>
          </div>
          <div className="textwrapB col-xl-4 col-lg-4 col-md-4">

            <div className="roller">
              <h1
                className="headerB hidden"
                id="rolltext-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span>Rp 99.000-</span>
                <br />
                <span style={{ marginBottom: '1em', marginTop: '1em' }}>DREWHITE</span>
                <br />
                <span>Rp 99.000-</span>
              </h1>
            </div>
            <p className='paragrafB hidden'>DREWHITE adalah minuman serbuk untuk kesehatan dan kecantikan.DREWHITE terbuat dari perpaduan bahan-bahan berkualitas yang memiliki banyak khasiat.</p>
            <h6 className='paragrafB hidden' style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px' }}>Ingredients</h6>
            <p className='paragrafB hidden'>Ekstrak Buah Beri Merah (Blueberry, Blackberry, Raspberry), Collagen Tripeptide, Red Beet, Inulin, L-Glutathione, Asorbic Acid (Vitamin C),Lycopene, Grapeseed, Vitamin A&E (Retinol), Vitamin B3 (Niacin)</p>
            <a href="products" rel="noopener noreferrer">
              <button className='redbtn hidden'>DETAIL PRODUCT</button>
            </a>
          </div>
        </div>
      </div>

      <div className='containerC'>
        <div className='row'>
          <img className='col Halal' src={halal1} alt="halal"></img>
          <img className='col Halal' src={halal2} alt="halal"></img>
          <img className='col Halal' src={halal3} alt="halal"></img>
          <img className='col Halal' src={ha} alt="halal"></img>
          <img className='col Halal' src={halal5} alt="halal"></img>
        </div>
      </div>

      <div className="row kolagen align-items-center col-12">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <h6 className='apayang1 hidden shadowHeader'>Apa yang membuat DREWHITE berbeda?</h6>
          <p className='paragrafC hidden'>
            Banyak penelitian yang membuktikan bahwa kolagen memiliki manfaat dalam membantu mengencangkan kulit, mencegah penuaan dini, sekaligus mengurangi kulit kering dan keriput. Kolagen juga berperan penting dalam proses penyembuhan luka, selain mengandung kolagen DREWHITE juga mengandung L-Glutathione dan Bifidobacterium Longum yang memiliki banyak manfaat.
          </p>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-center">
          <img className="imgC" src={gambar3} alt="Avatar" />
        </div>
      </div>


      <div className="row kolagen">
        <div className="col-xl-4 col-lg-4 col-md ">
          <img className='komposisi' src={komposisi3} alt='link'></img>
          <h6 className='header2C hidden shadowHeader'>Collagen Tripeptide </h6>
          <p className='paragrafC hidden'>Kolagen memiliki manfaat dalam membantu mengencangkan kulit, mencegah penuaan dini, sekaligus mengurangi kulit kering dan keriput.</p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md ">
          <img className='komposisi' src={komposisi2} alt='link'></img>
          <h6 className='header2C hidden shadowHeader'>L-Glutathione</h6>
          <p className='paragrafC hidden'>Glutathione penting bagi kesehatan, diantaranya mencegah kerusakan sel tubuh, memperbaiki sel dan jaringan tubuh yang rusak, serta menunjang sistem kekebalan tubuh.</p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md ">
          <img className='komposisi' src={komposisi1} alt='link'></img>
          <h5 className='header2C hidden shadowHeader'>Bifidobacterium Longum</h5>
          <p className='paragrafC hidden'>Bifidobacterium longum yang kebal antibiotik dapat membantu mengobati penyakit radiasi. Dapat mencegah pertumbuhan bakteri berbahaya yang menyebabkan infeksi dan menetralkan racun di usus.</p>
        </div>
      </div>

      <div className='containerE'>
    <div className='row' >
      <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
        <img className='model4' src={model4} alt="Avatar"></img>
        <img className='edit4' src={edit4} alt="Avatar"></img> 
        </div>  
        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
        <h2 className='headerE'>FREQUENTLY ASKED QUESTIONS</h2>
        { <Accordion /> }
        </div>
      </div>
    </div> 


      <div className='containerLink'>
        <p className='OrderText'>
          "Temukan Kulit Sehat Dan Bersinar Dengan Produk Collagen Kami,<br />
          Tersedia Di Marketplace Favoritmu!"
        </p>
        <div className='row linkWrapper'>
          <div className='col-xl col-lg col-md-4 col-sm-6 col-12 linkComponent'>
            <img className='imgLink' src={shopee} alt="link" />
            <a href="https://shp.ee/78mv6wi" target="_blank" rel="noopener noreferrer">
              <button className='btnLink btnAnimate'>ORDER VIA SHOPEE</button>
            </a>
          </div>
          <div className='col-xl col-lg col-md-4 col-sm-6 col-12 linkComponent'>
            <img className='imgLink' src={tokped} alt="link" />
            <a href="https://tokopedia.link/drewhiteofficial" target="_blank" rel="noopener noreferrer">
              <button className='btnLink btnAnimate'>ORDER VIA TOKOPEDIA</button>
            </a>
          </div>
          <div className='col-xl col-lg col-md-4 col-sm-6 col-12 linkComponent'>
            <img className='imgLink' src={whatsapp} alt="link" />
            <a href="https://api.whatsapp.com/send/?phone=081211118412&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <button className='btnLink btnAnimate'>ORDER VIA WHATSAPP</button>
            </a>
          </div>
          <div className='col-xl col-lg col-md-4 col-sm-6 col-12 linkComponent'>
            <img className='imgLink' src={tiktok} alt="link" />
            <a href="https://vt.tiktok.com/ZS8XWCvL8/" target="_blank" rel="noopener noreferrer">
              <button className='btnLink btnAnimate'>ORDER VIA TIKTOK</button>
            </a>
          </div>
        </div>
      </div>

    </main>
  )
}



export default Home