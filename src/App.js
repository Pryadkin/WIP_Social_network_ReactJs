import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css'


function App(props) {
  const { state } = props;

  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Route path='/profile' render={ () => <Profile state={state} /> }/>
      <Route path='/dialog' render={ () => <Dialogs state={state} /> }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
