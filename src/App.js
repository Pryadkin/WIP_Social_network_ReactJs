import React from 'react'
import Header from './components/Header/Header'
import Sitebar from './components/Sitebar/Sitebar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { Route } from 'react-router-dom'
import './App.css'


function App(props) {
  const { state, setPosts, updateNewPostText } = props;

  return (    
    <div className="app-wrapper">
      <Header />
      <Sitebar state={state}/>
      <Route path='/profile' render={ () => 
        <Profile 
          state={state} 
          setPosts={setPosts}
          updateNewPostText={updateNewPostText}
        />
      }/>
      <Route path='/dialog' render={ () => <Dialogs state={state} /> }/>
    </div>
  );
}

export default App;
