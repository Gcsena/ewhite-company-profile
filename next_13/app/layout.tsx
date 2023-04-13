// MODULE
import Link from 'next/link.js';


// COMPONENT
import  Footer  from '../app/components/Footer.jsx';
import  Header  from '../app/components/Header.jsx';
import WhatsAppButton from '../app/components/WhatsAppButton.jsx';

// STYLING
import './globals.css'
import '../app/styles/image.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';




export const metadata = {
  title: 'DrEWHITE, collagen terbaru berkhasiat terbaik hadir di Indonesia',
  description: 'Perkenalkan minuman kolagen rasa raspberry terbaru dari kami! Kini Anda dapat menikmati manfaat dari kolagen berkualitas tinggi dan rasa buah yang segar',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '133758952979039');
            `
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        < WhatsAppButton />
        <Footer />
        </body>
    </html>
  )
}
