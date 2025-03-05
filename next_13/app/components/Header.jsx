import Link from 'next/link';
import Image from 'next/image';
import styles from '../../app/styles/image.module.css';
import ewhite from '/public/images/ewhite.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="d-flex justify-content-center">
              <Image
                className={styles.ewhite}
                src={ewhite}
                style={{ animation: 'slide-infinite 5s infinite' }}
                alt="Avatar"
              />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="d-flex justify-content-end">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/About" className="nav-link">
                About
              </Link>
              <Link href="/Products" className="nav-link">
                Product
              </Link>
              <Link href="/Reseller" className="nav-link">
                Reseller
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
