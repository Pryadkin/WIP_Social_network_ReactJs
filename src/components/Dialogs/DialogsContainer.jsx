import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../redux/StoreContext';

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      { store => {
        const onNewMessageChange = (message) => {
          const action = updateNewMessageBodyCreator(message);
          store.dispatch(action);
        }
      
        const onSendMessageClick = () => {
          const action = sendMessageCreator();
          store.dispatch(action);
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
