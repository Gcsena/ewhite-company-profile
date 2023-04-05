import Link from "next/link"
import { FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';


export default function Footer () {
    return (
        <nav>
        <div className='col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2'>
        <Link href="https://www.instagram.com/drewhite.official/?hl=id" target="_blank" rel="noopener noreferrer">
      <button type ='button' className='btn-sos'>
        <FaInstagram className="custom-icon" />
      </button>
        </Link>
        </div>        
        </nav>
    )
}