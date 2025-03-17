import React from 'react'
import { useEffect } from 'react';

import ekles4 from '../images/ekles4.png'
import amanda from '../images/amanda.png'
import reseller1 from '../images/reseller1.svg'
import reseller2 from '../images/reseller2.svg'
import reseller3 from '../images/reseller3.svg'
import reseller4 from '../images/reseller4.svg'
import reseller5 from '../images/reseller5.svg'
import reseller6 from '../images/reseller6.svg'
import reseller7 from '../images/reseller7.svg'
import reseller8 from '../images/reseller8.svg'
import reseller9 from '../images/reseller9.svg'
import coa5 from '../images/coa5.png'


import { BsWhatsapp } from 'react-icons/bs';


const Reseller = () => {

  //for scrolldown animation
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
      <div className="resellerA">
        <div className="row">
          <div className="col-xl col-lg col-md-1 col-sm">
            <img className="eklesReseller" src={ekles4} alt="Avatar"></img>
          </div>
          <div className="col-xl col-lg col-md-1 col-sm">
            <img className="amanda" src={amanda} alt="Avatar"></img>
          </div>
          <div className="col-xl col-lg col-md-1 col-sm">
            <h1 className="headF">
              BERGABUNG BERSAMA KAMI <br /> MENJADI RESELLER DREWHITE
            </h1>
            <p className="txtF">
              Hasilkan uang ratusan juta dan dapatkan kesempatan untuk liburan
              ke Singapore bersama DR EKLES dan Amanda Manopo
            </p>
            <h1 className="headF">#BISNISHALALCUANLANCAR</h1>
            <a
              href="https://api.whatsapp.com/send/?phone=081211118412&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="buttonContainer"
            >
              <button className="btnWA">
                <BsWhatsapp className="iconWa" />
                GABUNG SEKARANG
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="resellerB">
        <h1 className="headB">PILIHAN MEMBERSHIP DREWHITE</h1>
        <div className="row memberParent">
          <div className="memberWrap delayAnimation hidden col-xl-3 col-lg col-md-1 col-sm-1">
            <div className="memberTitle">BASIC</div>
            <div className="memberPrice">Rp. 4.207.500</div>
            <div className="memberDisc">49.500.000</div>
            <div className="memberDesc">
              Minimal order 50 box dengan diskon 15%
            </div>
          </div>
          <div className="memberWrap2 delayAnimation hidden col-xl-3 col-lg col-md-1 col-sm-1">
            <div className="memberTitle2">PRO</div>
            <div className="memberPrice">Rp. 32.175.000</div>
            <div className="memberDisc">49.500.000</div>
            <div className="memberDesc">
              Minimal order 50 box dengan diskon 15%
            </div>
          </div>
          <div className="memberWrap delayAnimation hidden col-xl-3 col-lg col-md-1 col-sm-1">
            <div className="memberTitle">MASTER</div>
            <div className="memberPrice">Rp. 19.800.000</div>
            <div className="memberDisc">49.500.000</div>
            <div className="memberDesc">
              Minimal order 50 box dengan diskon 15%
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid resellerC">
        <h1 className="headC hidden">
          MANFAAT BERGABUNG MENJADI <br /> RESELLER DREWHITE
        </h1>

        <div className="row justify-content-center">
          <div className="col-md-6 benefit-box hidden">
            <img className="resellerIcon" src={reseller5} alt="Benefit 1" />
            <p className="manfaatP">
              <b>Margin Profit Yang Menarik</b> <br />
              Produk yang sudah teruji memiliki permintaan yang tinggi di pasaran serta margin profit yang sangat menguntungkan
            </p>
          </div>

          <div className="col-md-6 benefit-box hidden">
            <img className="resellerIcon" src={reseller4} alt="Benefit 2" />
            <p className="manfaatP">
              <b>Benefit Potongan Harga dan Poin</b> <br />
              Dapatkan harga khusus reseller dan poin untuk mendapatkan reward.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 benefit-box hidden">
            <img className="resellerIcon" src={reseller3} alt="Benefit 3" />
            <p className="manfaatP">
              <b>Mendapatkan Reward Secara Berkala</b> <br />
              Dapatkan reward menarik seperti jalan-jalan ke Luar Negeri bareng Amanda dan Dokter Ekles dan reward menarik lainnya
            </p>
          </div>

          <div className="col-md-6 benefit-box hidden">
            <img className="resellerIcon" src={reseller1} alt="Benefit 4" />
            <p className="manfaatP">
              <b>Dibantu Dalam Pengembangan Bisnis DREWHITE</b> <br />
              Mendapatkan bimbingan pengembangan bisnis yang diadakan setiap seminggu sekali.
            </p>
          </div>
        </div>


        <div className="row justify-content-center">
          <div className="col-md-6 benefit-box hidden">
            <img className="resellerIcon" src={reseller2} alt="Benefit 5" />
            <p className="manfaatP">
              <b>Pelayanan Konsultasi Langsung Dengan Dokter</b> <br />
              Pelayanan ekslusif konsultasi produk dan bisnis dengan Dr. Ekles / tim DREWHITE setiap bulan.
            </p>
          </div>
        </div>
      </div>



      <div className="resellerE">
        <h1 className="headE">CARA BERGABUNG MENJADI RESELLER</h1>
        <div className="caraWrapper row">
          <div className="delayAnimation hidden col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="iconWrapper">
              <img src={reseller9} alt="Avatar" />
            </div>
            <p className="caraP">
              Direct Chat ke WA Admin DREWHITE atau melalui sistem kami
            </p>
          </div>

          <div className="delayAnimation hidden col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="iconWrapper">
              <img src={reseller8} alt="Avatar" />
            </div>
            <p className="caraP">Isi form pendaftaran dan lakukan pembayaran</p>
          </div>

          <div className="delayAnimation hidden col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="iconWrapper">
              <img src={reseller7} alt="Avatar" />
            </div>
            <p className="caraP">
              Lampirkan data pendaftaran dan bukti pembayaran
            </p>
          </div>

          <div className="delayAnimation hidden col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="iconWrapper">
              <img src={reseller6} alt="Avatar" />
            </div>
            <p className="caraP">Pendaftaran member DREWHITE selesai</p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#FFE2EB", marginTop: "60px", padding: "20px" }}>
        <div className="resellerF">
          <h1 className="headF hidden" style={{marginBottom: "60px"}}>BERGABUNGLAH DENGAN KAMI SEKARANG</h1>
          <div className="joinWrapper">
            <div className="imgContainer">
              <img className="resellerCoa hidden" src={coa5} alt="Avatar" />
            </div>
            <div className="textContainer">
              <p className="txtF hidden">
                Bergabunglah dengan kami sekarang dan dapatkan peluang
                untuk menawarkan produk berkualitas tinggi kepada pelanggan Anda. Selain itu, kami menyediakan dukungan penuh untuk reseller, mulai dari materi promosi,
                strategi pemasaran, hingga panduan bisnis yang akan membantu Anda berkembang. Tidak perlu khawatir
                dengan modal besar, karena sistem kami memungkinkan Anda untuk memulai dengan investasi yang terjangkau.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=081211118412&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="buttonContainer hidden"
              >
                <button className="btnWA">
                  <BsWhatsapp className="iconWa" />
                  GABUNG SEKARANG
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default Reseller
