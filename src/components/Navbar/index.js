import React, { useState } from 'react'
import './style.css';
import {NavLink} from 'react-router-dom'


/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    

    


  return(
    <div className="navbar">
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/post">Post</NavLink>
            </li>
        </ul>
        <div className="search">
            <form>
                <input type="search" className="searchInput" placeholder="search"/>
                <img alt="search" className="searchicon" src={require('../../assets/icons/search.png')}/>
            </form>
            
        </div>
    </div>
   )

 }

export default Navbar