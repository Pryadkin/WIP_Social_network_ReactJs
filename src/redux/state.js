const state = {
   profilePage: {
      posts: [
         { id: 1, message: "hello", liksCount: 0},
         { id: 1, message: "How are you?", liksCount: 15},
         { id: 1, message: "I'm fine", liksCount: 30},
      ],
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
}



export default state;

