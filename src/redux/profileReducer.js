import { usersAPI, profileAPI } from "../api/api";

const SET_POST = 'SET_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    { id: 1, message: "hello", liksCount: 2 },
    { id: 2, message: "How are you?", liksCount: 15 },
    { id: 3, message: "I'm fine", liksCount: 30 },
  ],
  newPostsText: '',
  profile: null,
  status: ''
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
        newPostsText: action.value
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

export const setPost = () => ({
  type: SET_POST
})

export const updateNewPostText = value => ({
  type: UPDATE_NEW_POST_TEXT,
  value
})

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
})

export const setStatus = status => ({
  type: SET_STATUS,
  status
})

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data));
    })
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(status => {
      dispatch(setStatus(status));
    })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
      }

    })
}


export default profileReducer;
