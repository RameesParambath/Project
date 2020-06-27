import React from 'react'
import './style.css';
import {NavLink} from 'react-router-dom'
import Icons from '../Icons';

/**
* @author
* @function 
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="iconsContainer">
            <Icons/>
        </div>
    </header>
   )

 }

export default Header