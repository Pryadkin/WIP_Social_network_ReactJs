import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sitebarReducer from './sitebarReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sitebar: sitebarReducer,
})

const store = createStore(reducers);

export default store;
