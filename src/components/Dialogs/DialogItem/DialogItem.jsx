import React from 'react';
import { NavLink } from 'react-router-dom'

// styles
import s from '../Dialogs.module.css'

const DialogItem = props => {
  const { name, id } = props;
  const link = `/dialog/${id}`;
  return (
    <div className={s.dialog}>
      <NavLink
        to={link}
        activeClassName="activeLink"
      >
        {name}
      </NavLink>
    </div>
  )
}

export default DialogItem;
