const SET_POST = 'SET_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  posts: [
    { id: 1, message: "hello", liksCount: 2 },
    { id: 2, message: "How are you?", liksCount: 15 },
    { id: 3, message: "I'm fine", liksCount: 30 },
  ],
  newPostsText: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        newPostsText: '',
        posts: [
          {
            id: 2,
            message: state.newPostsText,
            liksCount: 55
          },
          ...state.posts
        ]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostsText: action.message
      }
    default:
      return state;
  }
}

export const setPostActionCreator = () => ({
  type: SET_POST
})

export const updateNewPostTextActionCreator = value => ({
  type: UPDATE_NEW_POST_TEXT,
  message: value
})


export default profileReducer;
