import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';

import s from './Dialogs.module.css'

const Dialogs = props => {
  const { state } = props;
  const { dispatch } = props;
  const dialogs = state.messagesPage.dialogs;
  const messages = state.messagesPage.messages;
  const newMessageBody = state.messagesPage.newMessageBody;

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

  const onNewMessageChange = (e) => {
    const message = e.target.value;
    const action = updateNewMessageBodyCreator(message);
    dispatch(action);
  }

  const onSendMessageClick = () => {
    const action = sendMessageCreator();
    dispatch(action);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        { dialogElements }
      </div>
      <div className={s.messages__container}>
        <div className={s.messages}>
          { messageElements }
          <div>
            <textarea
              className={s.messageTextarea}
              placeholder='Enter your message'
              value={ newMessageBody }
              onChange={ onNewMessageChange }
            ></textarea>

            <div>
              <button
                className={s.but}
                onClick={ onSendMessageClick }
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dialogs;
