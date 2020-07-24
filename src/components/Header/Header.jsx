import React from 'react'

// styles
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = props => {
   return (
      <header className={s.header}>
         <div className={s.logo}>LOGO</div>

         <div className={s.loginBlock}>
            {props.isAuth
               ?
               <NavLink to={'/login'}>
                  Login
               </NavLink>
               : 'FREE'
            }

         </div>
      </header>
   )
}

export default Header;
