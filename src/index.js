import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store';
import { Provider } from 'react-redux';

// components
import App from './App';

// styles
import './index.css';

window.store = store;

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>, document.getElementById('root'));


