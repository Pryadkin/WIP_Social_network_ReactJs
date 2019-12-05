import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import './Dialogs.css'

// Data
const messagesData = [
  { message: "Hi", id: 1 },
  { message: "Yo", id: 2 },
  { message: "How is your it-kamasutra?", id: 3 },
];

const dialogsData = [
  { name: "Name_1", id: 1 },
  { name: "Name_2", id: 2 },
  { name: "Name_3", id: 3 },
  { name: "Name_4", id: 4 },
];

const Dialogs = props => {
  const dialogElements = dialogsData.map(elem => {
    const { name, id } = elem;
    return (
      <DialogItem
        name={ name }
        id={ id }
      />
    )
  })

  const messageElements = messagesData.map(elem => {
    const { message, id } = elem;
    return (
      <Message
        message={ message }
        id={ id }
      />
    )
  })

  return (
    <div className='dialogs'>
      <div className="dialog__items">
        { dialogElements }
      </div>
      <div className="dialogs__messages">
        { messageElements }
      </div>
    </div>
  )
}

export default Dialogs;
