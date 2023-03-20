import { useState, useEffect } from 'react';

import { Link } from 'react-scroll';
import { Accordion2 } from '../components/accordion.jsx';
// import lebarin from '../images/lebarin.jpg'
import group9 from '../images/group9.svg'
import produkHand from '../images/produkHand.jpg'
import produk1 from '../images/produk1.jpg'
import { ControlledCarousel } from '../components/carousel.jsx';


const Products = () => {

// LOGIC FOR FIRST IMAGE ANIMATION
  const [didScroll, setDidScroll] = useState(false);

  useEffect(() => {
    const paralaxTitles = document.querySelectorAll('.paralax-title');

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

  //LOGIC FOR SCROLLDOWN ANIMATION
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
      <div className="image-container" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${produkHand})`}}>
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

      {/* <div>
        <img className='banner' src={lebarin} alt="Avatar"></img> 
      </div> */}
      <div className='containerProdukA'>
    <div className="row">
      <div className=" col-xl-4 col-lg-4">
       < ControlledCarousel />
      </div>
      <div className="textprodukA col-xl col-lg" >
      <h1 className='hidden' style={{fontFamily: 'var(--font-playfair)', color:'#DA2A52'}}>DREWHITE</h1>
      <p className='paragrafProdukA hidden'>Dikonsep dan diawasi langsung oleh dokter profesional, DREWHITE merupakan minuman kolagen dengan Vitamin A, Vitamin B3, Vitamin C dan Probiotic yang baik untuk kesehatan dan kecantikan. Terbuat dari 100% bahan-bahan yang berkualitas, dengan rasa raspberry yang enak dan segar, serta aman dikonsumsi setiap hari. 
DREWHITE bermanfaat untuk : <br /> <br />
<ul>
  <li className='hidden'>meningkatkan elastisitas dan kelembaban kulit</li>
  <li className='hidden'>membantu mencerahkan warna kulit</li>
  <li className='hidden'>menjaga tubuh dari serangan radikal bebas</li>
  <li className='hidden'>mengurangi kerutan dan melawan tanda penuaan</li>
  <li className='hidden'>meningkatkan imun tubuh</li>
  <li className='hidden'>membantu menghilangkan noda hitam pada kulit</li>
  <li className='hidden'>membantu mengencangkan kulit</li>
</ul>
</p>
        <a href="http://localhost:3000/products" rel="noopener noreferrer">
        <Link to="ingredient" smooth={true} duration={500}><button className='redbtn btnAnimate hidden'>READ MORE</button></Link>
        </a>
      </div>
    </div>
  </div>
      <div className='containerHow'>
        <h1 className='HowToTxt'>HOW TO DRINK</h1>
        <img className='HowTo' src={group9} alt="Avatar"></img>
      </div>
    <div className='container'>
      <div className='row'>
      <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
        <img className='ingredientImg' src={produk1} alt="Avatar"></img>
      </div> 
      <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 '>
      <h1 className='headerIngredient' id="ingredient">INGREDIENTS</h1> 
            { <Accordion2 /> }
        </div>    
      </div>
    </div>
    
      
    </main>
  )
}

export default Products