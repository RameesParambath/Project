import React from 'react'
import './style.css';
import { NavLink } from 'react-router-dom'

/**
* @author
* @function Icons
**/

const Icons = (props) => {
  return(
      <div className="socialmediaicons">
        
    <NavLink to="https://www.facebook.com/"><img alt="search" className="searchicon" src={require('../../assets/icons/fb.png')}/></NavLink>
    <NavLink to="https://www.facebook.com/"><img alt="search" className="searchicon" src={require('../../assets/icons/watsup.png')}/></NavLink>
    <NavLink to="https://www.facebook.com/"><img alt="search" className="searchicon" src={require('../../assets/icons/skype.png')}/></NavLink>
    <NavLink to="https://www.facebook.com/"><img alt="search" className="searchicon" src={require('../../assets/icons/linkedin.png')}/></NavLink>
    <NavLink to="https://www.facebook.com/"><img alt="search" className="searchicon" src={require('../../assets/icons/insta.png')}/></NavLink>
    </div>
   )

 }

export default Icons