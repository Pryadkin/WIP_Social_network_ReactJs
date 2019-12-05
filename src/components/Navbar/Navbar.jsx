import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Havbar = () => {
   return (
      <nav className="nav">
        <div>
          <NavLink
            to="/profile"
            className="navItem"
            activeClassName="activeLink"
          >
          Profile</NavLink>
        </div>
        <div>
        <NavLink
            to="/dialog"
            className="navItem"
            activeClassName="activeLink"
          >
          Messages</NavLink>
        </div>
        <div>
        <NavLink
            to="/news"
            className="navItem"
            activeClassName="activeLink"
          >
          News</NavLink>
        </div>
        <div>
        <NavLink
            to="/music"
            className="navItem"
            activeClassName="activeLink"
          >
          Music</NavLink>
        </div>
        <div>
        <NavLink
            to="/settings"
            className="navItem"
            activeClassName="activeLink"
          >
          Settings</NavLink>
        </div>
      </nav>
   )
}

export default Havbar;
