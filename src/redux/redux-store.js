import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sitebarReducer from './sitebarReducer'
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sitebar: sitebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
