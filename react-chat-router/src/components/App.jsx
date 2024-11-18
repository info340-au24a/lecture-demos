import React, {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import { HeaderBar } from './HeaderBar.jsx';

import ChatPage from './ChatPage.jsx';
import SignInPage from './SignInPage.jsx';
import * as Static from './StaticPages.jsx';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initialize;

  //STATE MANAGEMENT: how do we change?
  const addMessage = (userObj, messageText, channel) => {
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
    const newArray = [...messageStateArray, newMessage];
    setMessageStateArray(newArray); //update state & re-render
  }

  const changeUser = (newUserObj) => {
    setCurrentUser(newUserObj);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>
        <Route path="/home" element={<Static.WelcomePage />} />
        <Route path="/about" element={<Static.AboutPage />} />  

        <Route path="/chat/:whichChannel?" element={
          <ChatPage 
            currentUser={currentUser} 
            messageArray={messageStateArray}
            addMessageFunction={addMessage}
          />
        } />
        <Route path="/signin" element={
          <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} 
        />
        <Route path="*" element={<Static.ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;