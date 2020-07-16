import React from 'react'
import { Route } from 'react-router-dom'

// components
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import SitebarContainer from './components/Sitebar/SitebarContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'

// styles
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <SitebarContainer />
      <Route path='/profile' render={() => (
        <Profile />
      )
      } />
      <Route path='/dialog' render={() => (
        <DialogsContainer />
      )
      } />

    </div>

  );
}

export default App;
