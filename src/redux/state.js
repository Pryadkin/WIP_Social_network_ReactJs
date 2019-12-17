const SET_POST = 'SET_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: "hello", liksCount: 2},
            { id: 1, message: "How are you?", liksCount: 15},
            { id: 1, message: "I'm fine", liksCount: 30},
         ],
         newPostsText: '',
      },
      messagesPage: {
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
      },
      sitebar: {
         friends: [
            {name: 'Artem', img: 'https://image.flaticon.com/icons/svg/1100/1100023.svg'},
            {name: 'Dima', img: 'https://image.flaticon.com/icons/svg/1100/1100025.svg'},
            {name: 'Nadya', img: 'https://image.flaticon.com/icons/svg/1100/1100049.svg'},
            {name: 'Vadim', img: 'https://image.flaticon.com/icons/svg/1100/1100024.svg'},
            {name: 'Olya', img: 'https://image.flaticon.com/icons/svg/1100/1100035.svg'},
            {name: 'Aleksandr', img: 'https://image.flaticon.com/icons/svg/1100/1100019.svg'},
         ]
      }
   },
   _callSubscriber() {
      console.log('change state')
   },
   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   despatch(action) {
      if (action.type === SET_POST) {
         const post = {
            id: 2,
            message: this._state.profilePage.newPostsText,
            liksCount: 55
         };
         this._state.profilePage.posts.push(post);
         this._state.profilePage.newPostsText = '';  // Обнуляем textarea после отправки сообщения
         this._callSubscriber(store.getState());
      }
      if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostsText = action.message;  // Обнуляем textarea после отправки сообщения
         this._callSubscriber(store.getState());
      }
      if (action.type === SEND_MESSAGE) {
         const message = {
            id: 4,
            message: this._state.messagesPage.newMessageBody,
         };
         this._state.messagesPage.messages.push(message);
         this._state.messagesPage.newMessageBody = '';
         this._callSubscriber(store.getState());
      }
      if (action.type === UPDATE_NEW_MESSAGE_BODY) {
         this._state.messagesPage.newMessageBody = action.message;
         this._callSubscriber(store.getState());
      }
   },
}

export const setPostActionCreator = () => ({
   type: SET_POST
})

export const updateNewPostTextActionCreator = value => ({
   type: UPDATE_NEW_POST_TEXT,
   message: value
})

export const sendMessageCreator = () => ({
   type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = value => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   message: value
})

export default store;
window.store = store;
