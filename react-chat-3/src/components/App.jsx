import React, {useState} from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelNav } from './ChannelNav.jsx';
import { ChatPane } from './ChatPane.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

const DEFAULT_USERS = [
  {userId: null, userName: null, userImg: '/img/null.png'}, //null user
  {userId: "penguin", userName: "Penguin", userImg: '/img/Penguin.png'},
  {userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png'},
  {userId: "zebra", userName: "Zebra", userImg: '/img/Zebra.png'},  
]


function App(props) {

  const channelNames = ["general", "channel-2", "birds", "dank-memes", "random"]
  const currentChannel = "general";

  const [msgStateArray, setMsgStateArray] = useState(INITIAL_CHAT_LOG); 

  //initially be the null user (nobody)
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]);

  console.log(msgStateArray);

  //data processing
  //how many messages per channel
  //[{}{}{}{}] => {channel: number, channel, number}
  const channelMsgCounts = msgStateArray.reduce(
    (accObj, currMsg) => {
      //accObj['general'] += 1
      if(!accObj[currMsg.channel]) {
        accObj[currMsg.channel] = 0;
      }
      accObj[currMsg.channel] += 1;
      return accObj;
    },
    {} //start with an empty object
  )

  /* STATE MANAGEMENT: how do we change */
  const loginUser = (userObj) => {
    //if user is invalid don't do it
    setCurrentUser(userObj);
  }

  const addMessage = function(userObj, messageText, channel) {
    console.log("addmsg")
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
    console.log(newMessage);
    const newArray = [...msgStateArray, newMessage];
    setMsgStateArray(newArray); //update the board & re-render
  }


  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} loginFunction={loginUser} />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelNav channelNames={channelNames} currentChannel={currentChannel} channelCounts={channelMsgCounts} />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane currentChannel={currentChannel} msgArray={msgStateArray} addMessageFunction={addMessage} currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default App;