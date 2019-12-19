import React from 'react'
import Header from './components/Header/Header'
import Sitebar from './components/Sitebar/Sitebar'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import { Route } from 'react-router-dom'
import './App.css'


function App(props) {
  const { state, dispatch } = props;

  return (
    <div className="app-wrapper">
      <Header />
      <Sitebar state={state}/>
      <Route path='/profile' render={ () => (
          <Profile
            state={state}
            dispatch={dispatch}
          />
        )
      }/>
      <Route path='/dialog' render={ () => (
          <DialogsContainer
            state={state}
            dispatch={dispatch}
          />
        )
      }/>
    </div>
  );
}

export default App;
