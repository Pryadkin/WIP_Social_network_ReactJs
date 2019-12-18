const SET_POST = 'SET_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  posts: [
     { id: 1, message: "hello", liksCount: 2},
     { id: 1, message: "How are you?", liksCount: 15},
     { id: 1, message: "I'm fine", liksCount: 30},
  ],
  newPostsText: '',
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      const post = {
        id: 2,
        message: state.newPostsText,
        liksCount: 55
      };
      state.posts.push(post);
      state.newPostsText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostsText = action.message;
      return state;
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

export default ProfileReducer;
