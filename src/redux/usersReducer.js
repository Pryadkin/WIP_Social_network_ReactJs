import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: !state.isFetching
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress:
          action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)

      };
    default:
      return state;
  }
};

export const followSuccess = userId => ({
  type: FOLLOW,
  userId
});

export const unFollowSuccess = userId => ({
  type: UNFOLLOW,
  userId
});

export const setUsers = users => ({
  type: SET_USERS,
  users
});

export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

export const setTotalUsersCount = count => ({
  type: SET_TOTAL_USERS_COUNT,
  count
});

export const toggleIsFetching = () => ({
  type: TOGGLE_IS_FETCHING
});

export const toggleIsFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    userId,
    isFetching
  };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching());
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toggleIsFetching());
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      })
  }
};

export const follow = (UserId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, UserId));
    usersAPI.postUsers(UserId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(UserId));
        }
        dispatch(toggleIsFollowingProgress(false, UserId));
      })
  }
};

export const unFollow = (UserId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, UserId));
    usersAPI.deleteUsers(UserId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unFollowSuccess(UserId));
        }
        dispatch(toggleIsFollowingProgress(false, UserId));
      })
  }
};




export default usersReducer;
