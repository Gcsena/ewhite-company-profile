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
            <h1 className="headA hidden">
              BERGABUNG BERSAMA KAMI <br /> MENJADI RESELLER DREWHITE
            </h1>
            <p className="txtA hidden">
              Hasilkan uang ratusan juta dan dapatkan kesempatan untuk liburan
              ke Singapore bersama DR EKLES dan Amanda Manopo
            </p>
            <h1 className="headA2 hidden">#BISNISHALALCUANLANCAR</h1>
            <a
              href="https://api.whatsapp.com/send/?phone=081211118412&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="buttonContainer"
            >
              <button className="btnWA1 hidden">
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
      <div className="resellerC">
        <h1 className="headC">
          MANFAAT BERGABUNG MENJADI <br /> RESELLER DREWHITE
        </h1>
        <div className="row">
          <div className="col-xl-1 col-lg col-md-1">
            <img className="resellerIcon hidden" src={reseller5} alt="Avatar"></img>
          </div>
          <div className="col-xl-4 col-lg col-md-1">
            <p className="manfaatP">
              <b>Margin profit yang menarik</b> <br /> Lorem ipsum dolor sit
              amet consectetur. Vitae ut dignissim nam tellus adipiscing nibh
              aliquet.
            </p>
          </div>
          <div className="col-xl-1 col-lg col-md-1">
            <img className="resellerIcon hidden" src={reseller4} alt="Avatar"></img>
          </div>
          <div className="col-xl-4 col-lg col-md-1">
            <p className="manfaatP">
              <b>Dapat potongan harga dan poin</b> <br /> Lorem ipsum dolor sit
              amet consectetur. Vitae ut dignissim nam tellus adipiscing nibh
              aliquet.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-1 col-lg col-md-1">
            <img className="resellerIcon hidden" src={reseller3} alt="Avatar"></img>
          </div>
          <div className="col-xl-4 col-lg col-md-1">
            <p className="manfaatP">
              <b>Mendapat reward secara berkala</b> <br /> Lorem ipsum dolor sit
              amet consectetur. Vitae ut dignissim nam tellus adipiscing nibh
              aliquet.
            </p>
          </div>
          <div className="col-xl-1 col-lg col-md-1">
            <img className="resellerIcon hidden" src={reseller1} alt="Avatar"></img>
          </div>
          <div className="col-xl-4 col-lg col-md-1">
            <p className="manfaatP">
              <b>Dibantu dalam pengembangan bisnis DREWHITE</b> <br /> Lorem
              ipsum dolor sit amet consectetur. Vitae ut dignissim nam tellus
              adipiscing nibh aliquet.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-1 col-lg col-md-1">
            <img className="resellerIcon hidden" src={reseller2} alt="Avatar"></img>
          </div>
          <div className="col-xl-4 col-lg col-md-1">
            <p className="manfaatP">
              <b>Pelayanan konsultasi langsung dengan Dokter</b> <br /> Lorem
              ipsum dolor sit amet consectetur. Vitae ut dignissim nam tellus
              adipiscing nibh aliquet.
            </p>
          </div>
        </div>
      </div>

      {/* <div className='resellerD'>
          <h1 className='headC'>TESTIMONI DARI RESELLER KAMI</h1>
          <div className='row'>
            <div className="col-xl col-lg col-md-1">

        
        </div>
          </div>
            </div> */}

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



      {/* <div className='resellerF'>
          <h1 className='headC'>YUK LIBURAN KE SINGAPORE BARENG DR. EKLES & AMANDA MANOPO</h1>
          <div className='row'>
            <div className="col-xl col-lg col-md-1">

        
        </div>
          </div>
            </div> */}

      <div className="resellerF" style={{ backgroundColor: "#FFE2EB" }}>
        <h1 className="headF">BERGABUNGLAH DENGAN KAMI SEKARANG</h1>
        <div className="joinWrapper row">
          <div className="col-xl col-lg col-md-1">
            <img className="resellerCoa" src={coa5} alt="Avatar"></img>
          </div>
          <div className="col-xl col-lg col-md-1">
            <p className="txtF">
              Ingin mencari kesempatan bisnis dengan modal kecil namun
              berpotensi menghasilkan keuntungan besar? Jadilah reseller produk
              kolagen drewhite. Bergabunglah dengan kami sekarang dan dapatkan
              peluang untuk menawarkan produk berkualitas tinggi kepada
              pelanggan Anda. Dengan produk kami yang terbukti efektif dan aman,
              Anda dapat memperoleh penghasilan tambahan yang stabil dan meraih
              kesuksesan bisnis Anda sendiri. Tunggu apa lagi? Gabung bersama
              kami dan mulailah perjalanan Anda menuju keberhasilan!
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=081211118412&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="buttonContainer"
            >
              <button className="btnWA2 hidden">
                <BsWhatsapp className="iconWa" />
                GABUNG SEKARANG
              </button>
            </a>
          </div>
        </div>

        <div className="konsulWrapper row">
          <div className="col-xl col-lg col-md-1">
            <h1 className="headF2 ">KONSULTASI LANGSUNG DENGAN KAMI</h1>
            <p className="txtF2">
              Anda dapat melakukan konsultasi langsung dengan kami sebelum
              pembelian atau sesudah pembelian.
              <br /> Kami akan membantu menyelesaikan permasalahan anda. Jangan
              ragu untuk menghubungi kami kapan saja,
              <br /> karena kami selalu siap untuk membantu Anda dan pembeli
              Anda.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=081211118412&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="buttonContainer"
            >
              <button className="btnWA3 hidden">
                <BsWhatsapp className="iconWa" />
                KONSULTASI DISINI
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Reseller
