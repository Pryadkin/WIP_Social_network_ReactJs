import React from 'react';
import { NavLink } from 'react-router-dom'

import '../Dialogs.css'

const DialogItem = props => {
  const { name, id } = props;
  const link = `/dialog/${id}`;
  return (
    <div className="dialog">
      <NavLink
        to={link}
        activeClassName="activeLink"
      >
      { name }</NavLink>
      </div>
  )
}

export default DialogItem;
