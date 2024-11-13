import React, {useState} from 'react';

import { ComposeForm } from './ComposeForm.jsx';


export function ChatPane(props) {
  console.log("rendering chatpane")
  const { currentUser, currentChannel, msgArray, addMessageFunction } = props;


  /* RENDERING: what do we look like */

  //Step 1. data processing
  //data: an array of message objects [{}, {}]
  const orderedMessageArray = msgArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order
  //filter for only channel stuff
  const channelMessages = orderedMessageArray.filter((msgObj) => {
    return msgObj.channel === currentChannel;
  })

  //Step 2. convert data to views
  //views: DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = channelMessages.map((chatObj) => {
      const elem = <MessageItem messageData={chatObj} key={chatObj.timestamp} />
      return elem; //put it in the new array!
  });

  return (
    <>
      <div className="scrollable-pane pt-2 my-2">
        {/* conditional rendering */}
        { messageItemArray.length === 0 && 
          <p>No messages yet</p>
        }

        {/* Messages */}
        {messageItemArray}
      </div>

      <ComposeForm currentUser={currentUser} currentChannel={currentChannel} addMessageFunction={addMessageFunction} />
      </>
  )
}

function MessageItem(props) {
  const msgObj = props.messageData;
  const {userName, userImg, text} = msgObj;

  const handleClick = (event) => {
    console.log("You like a post by "+userName);
  }

  let buttonColor = "grey";

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
