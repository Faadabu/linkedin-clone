import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, logout } from './features/userSlice'
import Header from './Header'
import Sidebar from './Sidebar'
import Login from './Login'
import Feed from './Feed'
import Widgets from './Widgets'
import './App.css';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userCredentials => {
      if(userCredentials) {
        dispatch(login({
          email: userCredentials.email,
          uid: userCredentials.uid,
          displayName: userCredentials.displayName,
          photoUrl: userCredentials.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  },[dispatch])
  return (
    <div className="app">
      <Header />
      {
        !user? 
        <Login />:
        <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widget */}
        <Widgets />
      </div> 
      }
    </div>
  );
}

export default App;
