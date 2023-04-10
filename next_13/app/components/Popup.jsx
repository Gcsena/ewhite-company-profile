
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import Link from 'next/link';
import Image from 'next/image';

// export const Popup = () => {
  export default function Popup () {
  const myTimerRef = useRef(null);

  useEffect(() => {
    $('.popup-wrap').fadeIn(1500);

    myTimerRef.current = setInterval(() => {
      console.log('interval');
    }, 1000);

    $('.popup .btn-close').on('click', function () {
      clearInterval(myTimerRef.current);
      $('.popup-wrap').fadeOut(500);
    });

    return () => {
      clearInterval(myTimerRef.current);
      $('.popup .btn-close').off('click');
    };
  }, []);

  return (
    <div className="popup-wrap" style={{ display: 'none' }}>
      <div className="popup">
        <Link href='https://shp.ee/78mv6wi' target="_blank" rel="noopener noreferrer">
          <Image className='promoImg' src='/images/promopuasa.png' width={200} height={200} alt="promo" />
        </Link>
        <div className="btn-close"></div>
      </div>
    </div>
  );
};
