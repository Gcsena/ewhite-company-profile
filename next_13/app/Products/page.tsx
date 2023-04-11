"use client"; //make this page become client component,so we can use the hooks

import { useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';


import ControlledCarousel from '../components/carousel';
// import Accordion2 from '../components/accordion.jsx';


const Products = () => {

// LOGIC FOR FIRST IMAGE ANIMATION

const [didScroll, setDidScroll] = useState(false);

useEffect(() => {
  const paralaxTitles = document.querySelectorAll<HTMLElement>('.paralax-title');

  const scrollInProgress = () => {
    setDidScroll(true);
  }

  const raf = () => {
    if(didScroll) {
      paralaxTitles.forEach((element, index) => {
        element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
      })
      setDidScroll(false);
    }
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  window.addEventListener('scroll', scrollInProgress);

  return () => {
    window.removeEventListener('scroll', scrollInProgress);
  }
}, [didScroll]);

  // LOGIC FOR SCROLLDOWN ANIMATION
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
    <main>
      
       <div className="outer-container ">
      <div className="image-container" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.1))`}}>
      <Image priority
    src='/images/produkHand.jpg'
    alt="White & Ageless From Inside"
    quality={100}
    width={200}
    height={200}
    
  />
        <h2 className="section-title on-dark">
          <span className="paralax-title">
            White & Ageless From Inside
          </span>
        </h2>
      </div>
      <h2 className="section-title">
        <span className="paralax-title" style={{color: '#DA2A52'}}>
        White & Ageless From Inside
        </span>
      </h2>
    </div>

      <div className='containerProdukA'>
    <div className="row">
      <div className=" col-xl-4 col-lg-4">
       < ControlledCarousel />
      </div>
      <div className="textprodukA col-xl col-lg" >
      <h1 className='hidden' style={{fontFamily: 'var(--font-playfair)', color:'#DA2A52'}}>DREWHITE</h1>
      <div className='paragrafProdukA'>
      <p className='hidden'>Dikonsep dan diawasi langsung oleh dokter profesional, DREWHITE merupakan minuman kolagen dengan Vitamin A, Vitamin B3, Vitamin C dan Probiotic yang baik untuk kesehatan dan kecantikan. Terbuat dari 100% bahan-bahan yang berkualitas, dengan rasa raspberry yang enak dan segar, serta aman dikonsumsi setiap hari. 
DREWHITE bermanfaat untuk : <br /> <br /> </p>
{/* <ul>
  <li className='hidden'>meningkatkan elastisitas dan kelembaban kulit</li>
  <li className='hidden'>membantu mencerahkan warna kulit</li>
  <li className='hidden'>menjaga tubuh dari serangan radikal bebas</li>
  <li className='hidden'>mengurangi kerutan dan melawan tanda penuaan</li>
  <li className='hidden'>meningkatkan imun tubuh</li>
  <li className='hidden'>membantu menghilangkan noda hitam pada kulit</li>
  <li className='hidden'>membantu mengencangkan kulit</li>
</ul> */}
</div>  
        <Link href="/products" rel="noopener noreferrer">
          <ScrollLink to="ingredient" smooth={true} duration={500}><button className='redbtn btnAnimate hidden'>READ MORE</button></ScrollLink>
        </Link>
      </div>
    </div>
  </div>
      <div className='containerHow'>
        <h1 className='HowToTxt'>HOW TO DRINK</h1>
        <Image className='HowTo' src='/images/group9.svg' width={200} height={200} alt="Avatar" />
      </div>
    <div className='container'>
      <div className='row'>
      <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
      <Image className='ingredientImg' src='/images/produk1.jpg' width={200} height={200} alt="Avatar" />      </div> 
      <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 '>
      <h1 className={`headerIngredient `} id="ingredient">INGREDIENTS</h1> 
            {/* { <Accordion2 /> } */}
        </div>    
      </div>
    </div>
    
      
    </main>
  )
}

export default Products