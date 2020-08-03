const SEND_MESSAGE = 'SEND_MESSAGE';

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
   ]
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         return {
            ...state,
            messages: [
               ...state.messages,
               {
                  id: 4,
                  message: action.newMessageBody,
               }
            ]
         }
      default:
         return state;
   }
}

export const sendMessage = (newMessageBody) => ({
   type: SEND_MESSAGE,
   newMessageBody
})

export default dialogsReducer;
