import React from 'react'
import logo from '../assets/AdryLogo.png'
import {Link} from 'react-router-dom';
import '../styles/Nav.css'


const Nav = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <img src={logo}/>
        </div>
        <div className='right'></div>
        <Link to='/about'>About</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/resume'>Resume</Link>
    </div>
  )
}

export default Nav

