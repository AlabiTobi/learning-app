import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'    
import asaptrading from "../../components/assets/Asaptrading.png"

const Header= () => {
  return (
    <div className='home_header'>
        <Link className='logo' to='/home'>
            <img src={asaptrading} alt='Asaptrading'/>
        </Link>
        <ul className='link_line'>
            <li className='list-items'>
                <Link className='item-link' to="/home">Home</Link>
            </li>
            <li className='list-items'>
                <Link className='item-link' to="/login">Login</Link>
            </li>
            <li className='list-items'>
                <Link className='item-link' to='/register'>Register</Link>
            </li>
            <li className='list-items'>
                <Link className='item-link' to='/aboutUs'>About Us</Link>
            </li>
        </ul>    

    </div>
  )
}


export default Header