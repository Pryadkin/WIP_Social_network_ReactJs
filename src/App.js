import React from 'react';
import { Route } from 'react-router-dom';

// components
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import SitebarContainer from './components/Sitebar/SitebarContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

// styles
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <SitebarContainer />
      <Route
        path='/profile/:userId?'
        render={() => <ProfileContainer />} />
      <Route
        path='/dialog'
        render={() => <DialogsContainer />} />
      <Route
        path='/users'
        render={() => <UsersContainer />} />
    </div>

  )
};

export default App;
