const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const DialogsReducer = (state, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         const message = {
            id: 4,
            message: state.newMessageBody,
         };
         state.messages.push(message);
         state.newMessageBody = '';
         return state;
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.message;
         return state;
      default:
         return state;
   }
}

export const sendMessageCreator = () => ({
   type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = value => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   message: value
})

export default DialogsReducer;
