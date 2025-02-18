
import Logo from '/logo.png'
import Search from '/search.svg'
import Wishlist from '/wishlist.svg'
import Cart from '/cart.svg'
import User from '/user.svg'
import { Link, NavLink } from 'react-router'
const Header = () => {
  return (
   <section id="header" className="max-w-[1120px] mx-auto h-[88px] flex justify-between items-center">
<div className="logo w-[65px]">
  <Link to='/'><img src={Logo} alt="Logo" className='w-full'/></Link>
</div>
<div className="search bg-searchBgColor flex items-center gap-x-2  px-4 h-14 rounded-lg w-[25vw]">
  <img src={Search} alt="Search" className='w-4 h-4'/>
  <input className='outline-none text-sm text-searchTColor' type="text"  placeholder='Search here'/>
</div>
<div className="menu">
  <ul className='flex gap-x-12'>
    <li><NavLink style={({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  })} to='/'>Home</NavLink></li>
    <li><NavLink style={({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  })} to='about'>About</NavLink></li>
    <li><NavLink style={({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  })} to='contact'>Contact us</NavLink></li>
    <li><NavLink style={({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  })} to='blog'>Blog</NavLink></li>
  </ul>
</div>
<div className="icons flex gap-6">
<img src={Wishlist} alt="" className='w-5 h-5 cursor-pointer'/>
<img src={Cart} alt="" className='w-5 h-5 cursor-pointer'/>
<img src={User} alt="" className='w-5 h-5 cursor-pointer'/>
</div>
   </section>
  )
}

export default Header