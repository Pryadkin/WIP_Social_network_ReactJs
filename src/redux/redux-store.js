import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sitebarReducer from './sitebarReducer'
import usersReducer from './usersReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sitebar: sitebarReducer,
  usersPage: usersReducer
})

const store = createStore(reducers);

export default store;
