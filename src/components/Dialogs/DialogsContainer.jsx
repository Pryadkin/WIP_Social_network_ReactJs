import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';

const DialogsContainer = props => {
  const {
    state,
    dispatch
   } = props;

  const onNewMessageChange = (message) => {
    const action = updateNewMessageBodyCreator(message);
    dispatch(action);
  }

  const onSendMessageClick = () => {
    const action = sendMessageCreator();
    dispatch(action);
  }

  return (
    <Dialogs
      state={state}
      onNewMessageChange={onNewMessageChange}
      onSendMessageClick={onSendMessageClick}
    />
  )
}

export default DialogsContainer;
