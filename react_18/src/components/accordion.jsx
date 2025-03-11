import React, { useState } from "react";
import './accordion.css';



const AccordionItem = ({ index, title, content, activeIndex, handleClick }) => (
  <>
    <button
      className={`accordion ${activeIndex === index ? "activeaccor" : ""}`}
      onClick={() => handleClick(index)}
    >
      {title}
    </button>
    <div
      className="panel"
      style={{ maxHeight: activeIndex === index ? "300px" : "0" }}
    >
      <p>{content}</p>
    </div>
  </>
);

// Accordion Component
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle click to toggle active index
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    {
      title: "Apakah Produk DREWHITE Aman Untuk Ibu Hamil & Menyusui?",
      content: "Minuman collagen kami mengandung vitamin dan mineral esensial, dapat menjaga daya tahan tubuh ibu, memperlancar ASI, meningkatkan kecerdasan otak bayi, menjaga kulit bayi dan membuat rambut bayi tebal dan kuat.",
    },
    {
      title: "Kapan Waktu Yang Pas Untuk Minum DREWHITE?",
      content: "Waktu terbaik untuk meminum kolagen di pagi hari ataupun malam hari. Anda bebas mengkonsumsi collagen ini sebelum ataupun sesudah makan.",
    },
    // {
    //   title: "DREWHITE Disarankan Untuk Dikonsumsi Umur Berapa?",
    //   content: "Kolagen DREWHITE aman dikonsumsi dari usia 12 tahun, lansia dan ibu menyusui.",
    // },
    {
      title: "Apakah DREWHITE Mengandung Bahan Pengawet atau Pewarna Buatan?",
      content: "Tidak, DREWHITE tidak mengandung bahan pengawet, pewarna, atau pemanis buatan. DREWHITE menggunakan bahan-bahan alami dan berkualitas tinggi untuk hasil yang terbaik.",
    },
    {
      title: "Apakah DREWHITE Bisa Dikonsumsi Oleh Orang Dengan Kulit Sensitif?",
      content: "DREWHITE diformulasikan dengan bahan-bahan alami yang aman dan baik untuk tubuh. Namun, bagi yang memiliki riwayat alergi terhadap bahan tertentu, disarankan untuk konsultasi dengan dokter sebelum mengkonsumsi.",
    }
    

  ];

  return (
    <div style={{ backgroundColor: '#fff', padding: '2em 3em' }}>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

// Accordion2 Component (Another Accordion)
const Accordion2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle click to toggle active index
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    {
      title: "Buah Beri Merah",
      content: "Buah beri-berian kaya akan manfaat bagi kesehatan, sebagai vitamin dan antioksidan. Buah beri juga mengandung kalori yang cukup rendah sehingga buah ini sangat baik bagi siapapun yang ingin menjaga berat badan tetap stabil.",
    },
    {
      title: "Collagen Tripeptide",
      content: "Membantu menjaga elastisitas kulit, memperlambat proses penuaan kulit, menghilangkan noda hitam, mencerahkan warna kulit, dan mengencangkan kulit.",
    },
    {
      title: "Red Beet",
      content: "Mengurangi efek peradangan, merawat kecantikan kulit dan rambut, menjaga rona alami kulit dan melawan kerontokan rambut.",
    },
    {
      title: "Inulin (Prebiotik)",
      content: "Fungsi inulin adalah sebagai prebiotik sehingga penyerapan collagen menjadi lebih maksimal. Usus yang sehat menjadikan kulit cerah dan sehat.",
    },
    {
      title: "Grape Seed",
      content: "Meningkatkan penyembuhan luka, sebagai antioksidan, mendukung aktivitas jantung, anti-inflamasi, melindungi kulit dari UV, dan memperbaiki kulit kering.",
    },
    {
      title: "Vitamin A, E",
      content: "Mengatasi noda hitam, bekas jerawat, dan kulit gelap. Mencegah tanda penuaan, mengurangi peradangan, meningkatkan kelembaban dan elastisitas kulit.",
    },
  ];

  return (
    <div style={{ backgroundColor: '#fff', padding: '2em 3em' }}>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export { Accordion, Accordion2 };