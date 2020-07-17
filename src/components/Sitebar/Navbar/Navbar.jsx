import React from 'react'
import { NavLink } from 'react-router-dom';

// styles
import s from './Navbar.module.css'

const Havbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to="/profile"
          className={s.navItem}
          activeClassName="activeLink"
        >
          Profile</NavLink>
      </div>
      <div>
        <NavLink
          to="/dialog"
          className={s.navItem}
          activeClassName="activeLink"
        >
          Messages</NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={s.navItem}
          activeClassName="activeLink"
        >
          News</NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={s.navItem}
          activeClassName="activeLink"
        >
          Music</NavLink>
      </div>
    </nav>
  )
}

export default Havbar;
