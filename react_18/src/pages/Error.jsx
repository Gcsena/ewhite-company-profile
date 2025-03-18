import { Link } from 'react-router-dom'
import '../App.css';
import produk from '../images/produk.png';

const Error = () => {
  return (
    <main className="errorMain">
        <img
          className="d-block carouselProduk"
          src={produk}
          alt="Third slide"
        />
          <h6 className='apayang1'>Halaman yang anda cari tidak ditemukan</h6>
          <Link to="/" className="errorBtn" style={{marginTop: '30px'}}>KEMBALI KE HOMEPAGE</Link>
    </main>
  )
}

export default Error