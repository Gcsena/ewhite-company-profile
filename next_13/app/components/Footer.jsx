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
<div className="container">
    <div className="row">
    <Image className={styles.logoFooter} src={logowhite} alt="Avatar" />
    </div>
    <div className='row'>
      <div className="col-xl-1 col-lg-1 col-md-3 col-sm-3 col-3">
        <Link href='/' className='nav-link'>Home</Link>
      </div>
      <div className="col-xl-1 col-lg-1 col-md-3 col-sm-3 col-3">
        <Link href='products' className='nav-link'>Product</Link>
      </div>
      <div className="col-xl-1 col-lg-1 col-md-3 col-sm-3 col-3">
        <Link href='About' className='nav-link'>About</Link>
      </div>
      {/* <div className="col-xl-1 col-lg-1 col-md-3 col-sm-3 col-3">
        <Link href='Login' className='nav-link'>Login</Link>
      </div> */}
    </div>


    <div className='row'>
        <div className='col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2'>
        <Link href="https://linktr.ee/drewhite.official?utm_source=linktree_profile_share&ltsid=bcfc3d04-01b6-432b-9f86-8bf09dce472f" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <SiLinktree className="custom-icon" />
      </button>
    </Link>

        </div>
        <div className='col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2'>
        <Link href="https://wa.me/6281211118412" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <BsWhatsapp className="custom-icon" />
      </button>
    </Link>

        </div>
        <div className='col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2'>
        <Link href="https://www.instagram.com/drewhite.official/?hl=id" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <FaInstagram className="custom-icon" />
      </button>
        </Link>
        </div>
        <div className='col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2'>
        <Link href="https://www.tiktok.com/@drewhite.official?_t=8ZwvyXhsfSr&_r=1" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <FaTiktok className="custom-icon" />
      </button>
    </Link>
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
&copy; 2023 <Link href="/" style={{textDecoration: 'none'}}> DREWHITE</Link> - All Rights Reserved.
</div>



</footer>
  )
}
export default Footer

