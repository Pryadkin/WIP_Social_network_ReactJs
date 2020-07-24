import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sitebarReducer from './sitebarReducer'
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sitebar: sitebarReducer,
  usersPage: usersReducer,
  auth: authReducer
})

const store = createStore(reducers);

export default store;
