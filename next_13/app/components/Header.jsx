import Link from 'next/link';
import Image from 'next/image';
import styles from '../../app/styles/image.module.css';
// import { BsFillPersonFill } from 'react-icons/bs';
import ewhite from '/public/images/ewhite.svg'


const Header = () => {
  return (
    <header>
<div className='container'>
<div className="row align-items-center">
  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
    <Image className={styles.ewhite} src={ewhite} style={{ animation:'slide-infinite 5s infinite'}} alt="Avatar"></Image>
  </div>
  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className='d-flex justify-content-end'>
            <Link href='/' className='nav-link'>Home</Link>
            <Link href='About' className='nav-link'>About</Link>
            <Link href='products' className='nav-link'>Product</Link>
            {/* <Link href='Login' className='nav-link'>Login</Link> */}

        </div>
    </div>
  
</div>

</div>
    </header>
  )
}

export default Header;



