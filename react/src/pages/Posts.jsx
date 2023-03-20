import React from 'react'
import Banner from '../images/Banner.png'
import mockup1 from '../images/mockup1.png'
import mockup2 from '../images/mockup2.png'
import mockupbox from '../images/mockupbox.png'
import Mockup from '../images/Mockup.png'
import Testimonial from '../images/Testimonial.png';

function Posts() {
  return (
    <main>
      <div className='banner'>
        <img style={{ width: '80em', height: '35em', bottom:'2em', position: 'relative', display: 'flex'}} src={Banner} alt="Avatar"></img> 
      </div>
      
  <div className='galeri'> {/* ada planning bikin carousel n sejenisnya biar bagus */}
        <h3>GALLERY</h3>
      <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <img src={mockup1} width="50%" height="50%" />
        <img src={mockup2} width="50%" height="50%" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <img src={mockupbox} width="50%" height="50%" />
        <img src={Mockup} width="50%" height="50%" />
      </div>
      </div>
    </div>
  </div>

  <div className='containerD' style={{paddingTop: '7em'}}>
    <p className='paragrafD'>TESTIMONIALS</p>
    <h3 className='headerD'>What our Customers Says...</h3>
    <img style={{ width: '50em', height: '12em',position:'relative',display: 'flex', left: '10em'}} src={Testimonial} alt="Avatar"></img>
    <div className='col'>

    </div>

  </div>
      
        </main>
  )
}

export default Posts
