import React, {useState} from 'react';

import { ComposeForm } from './ComposeForm.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props) {
  console.log("rendering the ChatPane")
  const {currentChannel} = props;

  const [clickCount, setClickCount] = useState(340) //assign argument to state if nothing there

  const [msgStateArray, setMsgStateArray] = useState(INITIAL_CHAT_LOG); //msgs on the board

  console.log(clickCount); 

  const addMessage = (text) => {
    const newMessage =     {
      "userId": "penguin",
      "userName": "Penguin",
      "userImg": "/img/Penguin.png",
      "text": text,
      "timestamp": Date.now(),
      "channel": "general"
    }

    //add message to array
    const newArray = [...msgStateArray, newMessage];

    //write new array to the board
    setMsgStateArray(newArray);
  }


  const handleClick = (event) => {
    console.log("you clicked me");

    //update the board AND rerender the component
    //setClickCount(clickCount+1);

    addMessage("from button");
  }

  //data: an array of message objects [{}, {}]
  const messageObjArray = msgStateArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp) //chron order
    .filter((msgObj) => {
      return msgObj.channel === currentChannel
    })

  /**WHAT DO I LOOK LIKE **/
  if(messageObjArray.length === 0){
    return <p>No messages found!</p>
  }


  //views: DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = messageObjArray.map((chatObj) => {
      const elem = <MessageItem key={chatObj.timestamp} messageData={chatObj} />
      return elem; //put it in the new array!
  });

  return (
    <>
      <div className="scrollable-pane">
        {/* button demo */}
        <div className="pt-2 my-2">
          {/* addEventListener('click', myFunction) */}
          <button className="btn btn-success"
                  onClick={handleClick}
          >Click me!</button>
          <p>You clicked me {clickCount} times</p>
        </div>
        <hr/>

        {/* Messages */}
        {messageItemArray}
      </div>

      <ComposeForm howToAddMessage={addMessage} />
    </>
  )
}

function MessageItem(props) {
  const msgObj = props.messageData;
  const {userName, userImg, text} = msgObj;

  let buttonColor = "grey";

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button">
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
