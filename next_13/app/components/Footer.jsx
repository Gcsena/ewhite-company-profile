import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { SiLinktree } from 'react-icons/si';
import logowhite from '/public/images/logowhite.svg';
import styles from '../../app/styles/image.module.css';

const Footer = () => {
    return (
        <footer>
            <Image className={styles.logoFooter} src={logowhite} alt="Logo" />

            {/* Navigation */}
            <div className="nav-container">
                <Link href='/' className='nav-link'>Home</Link>
                <Link href='/products' className='nav-link'>Product</Link>
                <Link href='/about' className='nav-link'>About</Link>
                <Link href='/reseller' className='nav-link'>Reseller</Link>
            </div>

            <div className="social-icons">
                <Link href="https://linktr.ee/drewhite.official" target="_blank" rel="noopener noreferrer">
                    <button type='button' className='btn-sos'><SiLinktree className="custom-icon" /></button>
                </Link>
                <Link href="https://wa.me/6281211118412" target="_blank" rel="noopener noreferrer">
                    <button type='button' className='btn-sos'><BsWhatsapp className="custom-icon" /></button>
                </Link>
                <Link href="https://www.instagram.com/drewhite.official/" target="_blank" rel="noopener noreferrer">
                    <button type='button' className='btn-sos'><FaInstagram className="custom-icon" /></button>
                </Link>
                <Link href="https://www.tiktok.com/@drewhite.official" target="_blank" rel="noopener noreferrer">
                    <button type='button' className='btn-sos'><FaTiktok className="custom-icon" /></button>
                </Link>
            </div>

            <div className="kontak">
                <p><AiOutlineMail /> drewhiteofc@gmail.com</p>
                <p><FaPhoneAlt /> (+62) 81211118412</p>
            </div>

            <div className="copyrights">
                &copy; 2023 <Link href="/" style={{ textDecoration: 'none' }}>DREWHITE</Link> - All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
