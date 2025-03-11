import {Link, NavLink} from 'react-router-dom';
import { FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { SiLinktree } from 'react-icons/si';
import logowhite from '../images/logowhite.svg';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo */}
      <img className="logoFooter" src={logowhite} alt="Avatar" width={150} height={50}></img>


      {/* Navigation */}
      <div className="nav-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Product</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/reseller" className="nav-link">Reseller</Link>
      </div>

      {/* Social Media */}
      <div className="social-icons">
        <Link to="https://linktr.ee/drewhite.official" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn-sos"><SiLinktree className="custom-icon" /></button>
        </Link>
        <Link to="https://wa.me/6281211118412" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn-sos"><BsWhatsapp className="custom-icon" /></button>
        </Link>
        <Link to="https://www.instagram.com/drewhite.official/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn-sos"><FaInstagram className="custom-icon" /></button>
        </Link>
        <Link to="https://www.tiktok.com/@drewhite.official" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn-sos"><FaTiktok className="custom-icon" /></button>
        </Link>
      </div>

      {/* Contact Info */}
      <div className="kontak">
        <p><AiOutlineMail /> drewhiteofc@gmail.com</p>
        <p><FaPhoneAlt /> (+62) 81211118412</p>
      </div>

      {/* Copyrights */}
      <div className="copyrights">
        &copy; 2023 <Link to="/" style={{ textDecoration: 'none' }}>DREWHITE</Link> - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
