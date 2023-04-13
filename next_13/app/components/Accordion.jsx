import React, { useState } from "react";



export const Accordion = () =>  {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="hidden" style={{position: 'relative', backgroundColor: '#fff',paddingLeft: '2em', paddingRight: '3em', paddingTop: '2em', paddingBottom: '2em'}}>
      <button
        className={`accordion ${activeIndex === 0 ? "activeaccor " : "" }`}
        onClick={() => handleClick(0)}
      >
        Apakah Produk DREWHITE Aman Untuk Ibu Hamil & Menyusui?
      </button>
      <div
        className="panel"
        style={{ maxHeight: activeIndex === 0 ? "300px" : "0" }}>
        <p>minuman collagen kami mengandung vitamin dan mineral esensial,dapat menjaga daya tahan tubuh ibu, memperlancar ASI, meningkatkan kecerdasan otak bayi,menjaga kulit bayi dan membuat rambut bayi tebal dan kuat</p>
      </div>
      <button
        className={`accordion ${activeIndex === 1 ? "activeaccor" : ""}`}
        onClick={() => handleClick(1)}
      >
        Kapan Waktu Yang Pas Untuk Minum DREWHITE?
      </button>
      <div
        className="panel"
        style={{ maxHeight: activeIndex === 1 ? "300px" : "0" }}
      >
        <p>
        Waktu terbaik untuk meminum kolagen di Pagi hari ataupun malam hari.
        Anda bebas mengkonsumsi collagen ini sebelum ataupun sesudah makan.
        </p>
      </div>
      <button
        className={`accordion ${activeIndex === 2 ? "activeaccor" : ""}`}
        onClick={() => handleClick(2)}
      >
        DREWHITE Disarankan Untuk Dikonsumsi Umur Berapa?
      </button>
      <div
        className="panel"
        style={{ maxHeight: activeIndex === 2 ? "300px" : "0" }}
      >
        <p>
        Kolagen DREWHITE aman dikonsumsi dari usia 12 tahun, lansia dan ibu menyusui
        </p>
      </div>
    </div>
  );
}
export const Accordion2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{backgroundColor: '#fff',paddingLeft: '2em', paddingRight: '3em', paddingTop: '2em', paddingBottom: '2em', left: '5em'}}>
      <button
        className={`accordion2 ${activeIndex === 0 ? "activeaccor" : ""}` }
        onClick={() => handleClick(0)}
      >
        Buah Beri Merah
      </button>
      <div
        className="panel2"
        style={{ maxHeight: activeIndex === 0 ? "300px" : "0" }}>
        <p>
        Buah beri-berian kaya akan manfaat bagi kesehatan, sebagai vitamin dan antioksidan.
Buah beri juga mengandung kalori yang cukup rendah sehingga buah ini sangat baik bagi siapapun yang ingin menjaga berat badan tetap stabil
</p>
      </div>
      <button
        className={`accordion2 ${activeIndex === 1 ? "activeaccor" : ""}`}
        onClick={() => handleClick(1)}
      >
        Collagen Tripeptide
      </button>
      <div
        className="panel2"
        style={{ maxHeight: activeIndex === 1 ? "300px" : "0" }}
      >
        <p>
        Membantu menjaga elastisitas kulit, Membantu memperlambat proses penuaan kulit, Membantu menghilangkan noda hitam pada kulit, Membantu mencerahkan warna kulit, Membantu mengencangkan kulit        </p>
      </div>
      <button
        className={`accordion2 ${activeIndex === 2 ? "activeaccor" : ""}`}
        onClick={() => handleClick(2)}
      >
        Red Beet
      </button>
      <div
        className="panel2"
        style={{ maxHeight: activeIndex === 2 ? "300px" : "0" }}
      >
        <p>
        membantu mengurangi efek peradangan. Bit yang identik dengan warna merah ini juga bisa dimanfaatkan untuk merawat kecantikan kulit dan rambut. Dari mulai menjaga rona alami kulit hingga melawan kerontokan rambut.        </p>
      </div>
      <button
        className={`accordion2 ${activeIndex === 3 ? "activeaccor" : ""}`}
        onClick={() => handleClick(3)}
      >
        Inulin (Prebiotik)
      </button>
      <div
        className="panel2"
        style={{ maxHeight: activeIndex === 3 ? "300px" : "0" }}>
        <p>
        Fungsi inulin dalam collagen ini adalah sebagai prebiotik sehingga penyerapan collagen dalam tubuh menjadi lebih maksimal.  Karena usus yang bersih dan sehat akan menjadikan kulit kita menjadi cerah dan sehat.</p>
      </div>

      <button
        className={`accordion2 ${activeIndex === 7 ? "activeaccor" : ""}`}
        onClick={() => handleClick(7)}
      >
        Grape Seed
      </button>
      <div
        className="panel2"
        style={{ maxHeight: activeIndex === 7 ? "300px" : "0" }}>
        <p>
        Meningkatkan penyembuhan luka. Sebagai antioksidan. Aktivitas jantung dan pembuluh darah. Anti-inflamasi. Mencegah terjadinya proses penuaan kulit. Melindungi kulit dari radiasi sinar UV. Memperbaiki kulit kering dan gatal.
</p>
      </div>
      <button
        className={`accordion2 ${activeIndex === 8 ? "activeaccor" : ""}`}
        onClick={() => handleClick(8)}
      >
        Vitamin A, E
      </button>
      <div
        className="panel2"
        style={{ maxHeight: activeIndex === 8 ? "300px" : "0" }}>
        <p>
        Mengatasi noda hitam, bekas jerawat, dan kulit gelap. Mencegah tanda-tanda penuaan seperti kerutan dan garis-garis halus pada kulit. Mengurangi peradangan, Meningkatkan kelembaban dan elastisitas kulit.</p>
      </div>
      
    </div>
    
  );
}


 export default { Accordion, Accordion2 };
