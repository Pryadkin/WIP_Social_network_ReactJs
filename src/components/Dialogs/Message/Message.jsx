import React from 'react';

import '../Dialogs.css'

const Message = props => {
  const { message } = props;
  return (
    <div className="message">
      { message }
    </div>
  )
}

export default Message;
