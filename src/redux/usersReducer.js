const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_932815.jpg',
    //   followed: true,
    //   fullname: 'Troy Baker',
    //   status: 'I am a boss',
    //   location: {
    //     city: 'Moscow',
    //     country: 'Russia'
    //   }
    // },
    // {
    //   id: 2,
    //   photoUrl: 'https://thumbs.dfs.ivi.ru/storage2/contents/4/c/93625135b7ba1432825b874b3cec67.jpg',
    //   followed: false,
    //   fullname: 'Willem Dafoe',
    //   status: 'I am a boss too',
    //   location: {
    //     city: 'Samara',
    //     country: 'Russia'
    //   }
    // },
    // {
    //   id: 3,
    //   photoUrl: 'https://thumbs.dfs.ivi.ru/storage2/contents/4/c/93625135b7ba1432825b874b3cec67.jpg',
    //   followed: true,
    //   fullname: 'Michael J. Fox',
    //   status: 'I am a boss too',
    //   location: {
    //     city: 'Moscow',
    //     country: 'Russia'
    //   }
    // },
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) {
            return { ...user, followed: true }
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) {
            return { ...user, followed: false }
          }
          return user;
        })
      };
    case SET_USERS:
      console.log(action)
      return {
        ...state,
        users: [...state.users, ...action.payload]
      };
    default:
      return state;
  }
}

export const followAction = userId => ({
  type: FOLLOW,
  payload: userId
});

export const unFollowAction = userId => ({
  type: UNFOLLOW,
  payload: userId
});

export const setUsersAction = users => ({
  type: SET_USERS,
  payload: users
});


export default usersReducer;
