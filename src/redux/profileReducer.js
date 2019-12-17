const SET_POST = 'SET_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const ProfileReducer = (state, action) => {
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
