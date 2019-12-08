import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import s from './Dialogs.module.css'

const Dialogs = props => {
  const { state } = props;
  const dialogs = state.messagesPage.dialogs;
  const messages = state.messagesPage.messages;

  const dialogElements = dialogs.map(elem => {
    const { name, id } = elem;
    return (
      <DialogItem
        name={ name }
        id={ id }
      />
    )
  })

  const messageElements = messages.map(elem => {
    const { message, id } = elem;
    return (
      <Message
        message={ message }
        id={ id }
      />
    )
  })

  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        { dialogElements }
      </div>
      <div className={s.messages__container}>
        <div className={s.messages}>
          { messageElements }
        </div>
      </div>
      
    </div>
  )
}

export default Dialogs;
