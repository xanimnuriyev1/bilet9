import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
   <header>
    <div>
      <h1 className='foundation'>FOUNDATION</h1>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to={'/'} className={(navdata)=>navdata.isActive ? "active":""}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/add'} className={(navdata)=>navdata.isActive ? "active":""}>Add</NavLink>
        </li>
        <li>
          <NavLink to={'/discover'} className={(navdata)=>navdata.isActive ? "active":""}>Discover</NavLink>
        </li>
        <li>
          <NavLink to={'/donate'} className={(navdata)=>navdata.isActive ? "active":""}>Donate</NavLink>
        </li>
        <li>
          <NavLink to={'/blog'} className={(navdata)=>navdata.isActive ? "active":""}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'} className={(navdata)=>navdata.isActive ? "active":""}>Contact</NavLink>
        </li>
      </ul>
    </nav>
    <div className='Menu'>
    <IoMenu />
    </div>
   </header>
  )
}

export default Header
