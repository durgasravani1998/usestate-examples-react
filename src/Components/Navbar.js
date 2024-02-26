import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div id='mySidenav' className="sidenav">
        <NavLink to='/' className='nav-link'><i class="fa-solid fa-house-circle-exclamation"></i></NavLink>
        
        <NavLink to='/videodisplay' className='nav-link'><i class="fa-solid fa-video"></i></NavLink>
    </div>
  )
}

export default Navbar