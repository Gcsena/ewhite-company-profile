import {Link, NavLink} from 'react-router-dom';
import { FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import logowhite from '../images/logowhite.svg';

// THIS WILL BE USE IN FUTURE UPDATE

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>

      <nav className="d-flex flex-wrap justify-content-center">
  <div className="row">
  <div className="col-3">
    <img className="ewhite" style={{ width: '8em', height: '3em', display: 'flex', left: '1em'}} src={logowhite} alt="Avatar"></img>
      <p className='Address' style={{marginTop: '1em', marginBottom: '3em'}}>Make your skin healthier and younger with our products</p>
    <div className="col-12">
    <a href="" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <FaTwitter className="custom-icon" />
      </button>
    </a>
    <a href="" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <FaInstagram className="custom-icon" />
      </button>
    </a>
    <a href="" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <FaYoutube className="custom-icon" />
      </button>
    </a>
    <a href="" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <FaTiktok className="custom-icon" />
      </button>
    </a>
    </div>
    </div>
    
    <div className="col-3">
      <h3 className='headFooter'>Explore</h3>     
      <NavLink to='about'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
      >Home</NavLink>
      <NavLink to='about'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
      >Product</NavLink>
      <NavLink to='about'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
      >About</NavLink>
      <NavLink to='about'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
      >Testimonial</NavLink>
      </div>
    <div className="col-3">
    <h3 className='headFooter'>Company</h3>      
    <NavLink to='posts'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
      >Support</NavLink>
      <NavLink to='about'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
      >Contact Us</NavLink>
      <NavLink to='about'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
      >Address</NavLink>
      <NavLink to='about'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
      >FAQ</NavLink>
      <NavLink to='about'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
      >Return & Delivery</NavLink>
      <NavLink to='about'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
      >Reseller</NavLink>
      
    </div>
    <div className="col-3">
    <h3 className='headFooter'>Contact Us</h3>      
      <p className='Address'><BiMap className="custom-icon"/>  Jalan Kp. Pamahan Np. 60 RT.03 / RW.009,Jatiasih Kec.Jatiasih,Kota Bekasi,Jawa Barat</p>
      <p className='Address'><AiOutlineMail className="custom-icon"/>  support@drewhite.com</p>
      <p className='Address'><FaPhoneAlt className="custom-icon"/>  (+62) 123-4567-900</p>
    </div>
  </div>
</nav>

      </div>
      <div className="copyrights">
          &copy; 2023 <Link to="/"> DREWHITE</Link> - All Rights Reserved.
        </div>

    </footer>
  )
}

export default Footer


            