import { NavLink } from 'react-router-dom';
import ewhite from '../images/ewhite.svg';
import { BsFillPersonFill } from 'react-icons/bs';



const Header = () => {
  return (
    <header>
<div className='container'>
<div className="row align-items-center">
  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start">
    <img className="ewhite" src={ewhite} alt="Avatar"></img>
  </div>
  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className='d-flex justify-content-end'>
        <NavLink to='/' 
          className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >Home</NavLink>
        <NavLink to='about'
          className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >About</NavLink>
        <NavLink to='products'
          className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >Products</NavLink>
        <NavLink to='Reseller' 
          className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >Reseller</NavLink>
        <NavLink to='Login' 
          className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        ><button className='redbtn btnAnimate' style={{padding: '0.8em 1.5em', bottom: '0.4em', fontSize: '10px' }}><BsFillPersonFill className='iconPerson'/>LOGIN</button>
        </NavLink>
      </div>
    </div>
  
</div>

</div>
    </header>
  )
}

export default Header;



