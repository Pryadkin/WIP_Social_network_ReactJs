import React from 'react';
import { Redirect } from 'react-router-dom';

// components
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// styles
import s from './Dialogs.module.css'

const Dialogs = ({
  state,
  onNewMessageChange,
  onSendMessageClick,
}) => {
  const dialogs = state.messagesPage.dialogs;
  const messages = state.messagesPage.messages;
  const newMessageBody = state.messagesPage.newMessageBody;
  const isAuth = state.auth.isAuth;

  const dialogElements = dialogs.map(elem => {
    const { name, id } = elem;
    return (
      <DialogItem
        key={id}
        name={name}
        id={id}
      />
    )
  })

  if (!isAuth) {
    return <Redirect to={'/login'} />
  };

  const messageElements = messages.map(elem => {
    const { message, id } = elem;
    return (
      <Message
        key={id}
        message={message}
        id={id}
      />
    )
  })

  const onNewMessageChangeHandler = (e) => {
    const message = e.target.value;
    onNewMessageChange(message);
  }

  const onSendMessageClickHandler = () => {
    onSendMessageClick();
  }

  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        {dialogElements}
      </div>
      <div className={s.messages__container}>
        <div className={s.messages}>
          {messageElements}
          <div>
            <textarea
              className={s.messageTextarea}
              placeholder='Enter your message'
              value={newMessageBody}
              onChange={onNewMessageChangeHandler}
            ></textarea>

            <div>
              <button
                className={s.but}
                onClick={onSendMessageClickHandler}
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
