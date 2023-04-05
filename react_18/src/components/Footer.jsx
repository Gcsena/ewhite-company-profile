import {Link, NavLink} from 'react-router-dom';
import { FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { SiLinktree } from 'react-icons/si';
import logowhite from '../images/logowhite.svg';

const Footer = () => {
    return (
  
<footer>
<div className="container">
    <div className="row">
    <img className="logoFooter" src={logowhite} alt="Avatar"></img>
    </div>
    <div className='row'>
        <div className="col-xl-1 col-lg-1 col-md-3 col-sm-3 col-3">
        <NavLink to='/'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >Home</NavLink>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-3 col-sm-3 col-3">
        <NavLink to='Products'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >Product</NavLink>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-3 col-sm-3 col-3">
        <NavLink to='about'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >About</NavLink>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-3 col-sm-3 col-3">
        <NavLink to='Login'
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >Login</NavLink>
        </div>
    </div>
    <div className='row'>
        <div className='col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2'>
        <a href="https://linktr.ee/drewhite.official?utm_source=linktree_profile_share&ltsid=bcfc3d04-01b6-432b-9f86-8bf09dce472f" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <SiLinktree className="custom-icon" />
      </button>
    </a>

        </div>
        <div className='col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2'>
        <a href="https://api.whatsapp.com/send/?phone=081211118412&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <BsWhatsapp className="custom-icon" />
      </button>
    </a>

        </div>
        <div className='col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2'>
        <a href="https://www.instagram.com/drewhite.official/?hl=id" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <FaInstagram className="custom-icon" />
      </button>
        </a>
        </div>
        <div className='col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2'>
        <a href="https://www.tiktok.com/@drewhite.official?_t=8ZwvyXhsfSr&_r=1" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <FaTiktok className="custom-icon" />
      </button>
    </a>
        </div>
    </div>
    <div className='row'>
        <div className='col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'>
        <p className='Address kontak'><AiOutlineMail/>  drewhiteofc@gmail.com</p>
        </div>
        <div className='col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'>
        <p className='Address kontak'><FaPhoneAlt/>  (+62) 81211118412</p>
        </div>
    </div>

</div>

<div className="copyrights">
&copy; 2023 <Link to="/"> DREWHITE</Link> - All Rights Reserved.
</div>



</footer>
  )
}
export default Footer

