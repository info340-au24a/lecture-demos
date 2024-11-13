import React, { useState } from 'react';

export function ComposeForm(props) {
  const { currentUser, addMessageFunction, currentChannel } = props;

  const [inputtedText, setInputtedText] = useState('');

  //typing
  const handleChange = (event) => {
    setInputtedText(event.target.value);
  }

  //submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const userObj = { userId: "penguin", userName: "Penguin", userImg: "/img/Penguin.png" }

    addMessageFunction(currentUser, inputtedText, currentChannel);   
    setInputtedText('');
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        {currentUser.userId !== null && <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />}
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          onChange={handleChange}
          value={inputtedText}
        />
        <button type="submit" className="btn btn-secondary">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}