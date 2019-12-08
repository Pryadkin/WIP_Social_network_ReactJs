import React from 'react'

import s from './Header.module.css'

const Header = () => {
   return (
      <header className={s.header}>
        <div style={{width: "100%", height: "100%", background: "green"}}>LOGO</div>
      </header>
   )
}

export default Header;
