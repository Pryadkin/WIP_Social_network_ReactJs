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
   getState() {
      return this._state;
   },
   _callSubscriber() {
      console.log('change state')
   },
   setPosts(message) {
      const post = { id: 2, message: message, liksCount: 55};
      this._state.profilePage.posts.push(post);   
      this._state.profilePage.newPostsText = '';  // Обнуляем textarea после отправки сообщения
      this._callSubscriber(store.getState());  
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostsText = newText;
      this._callSubscriber(store.getState());
   },   
   subscribe(observer) {
      this._callSubscriber = observer;
   },
}

export default store;
window.store = store;
