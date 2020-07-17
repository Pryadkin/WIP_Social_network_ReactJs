import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../redux/StoreContext';

// components
import Dialogs from './Dialogs'

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {store => {
        const onNewMessageChange = (message) => {
          store.dispatch(updateNewMessageBodyCreator(message));
        }

        const onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        }
        return (
          <Dialogs
            state={store.getState()}
            onNewMessageChange={onNewMessageChange}
            onSendMessageClick={onSendMessageClick}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;
