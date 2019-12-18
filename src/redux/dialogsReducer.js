const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const initialState = {
   messages: [
      { message: "Hi", id: 1 },
      { message: "Yo", id: 2 },
      { message: "How is your it-kamasutra?", id: 3 },
    ],
   dialogs: [
      { name: "Name_1", id: 1 },
      { name: "Name_2", id: 2 },
      { name: "Name_3", id: 3 },
      { name: "Name_4", id: 4 },
   ],
   newMessageBody: '',
}

const DialogsReducer = (state = initialState, action) => {
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
