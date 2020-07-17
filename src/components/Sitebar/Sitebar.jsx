import React from 'react';
import { NavLink } from 'react-router-dom';

// components
import Navbar from './Navbar/Navbar';
import Friends from './Friends/Friends';

// styles
import s from './Sitebar.module.css'

const Sitebar = props => {
  const { state } = props;
  return (
    <div className={s.sitebar}>
      <Navbar />
      <div>
        <NavLink
          to="/settings"
          className={s.navItem}
          activeClassName="activeLink"
        >
          Settings</NavLink>
      </div>
      <Friends state={state} />
    </div>
  )
}

export default Sitebar;
