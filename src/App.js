import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Route path='/profile' component={ Profile }/>
      <Route path='/dialog' component={ Dialogs }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
