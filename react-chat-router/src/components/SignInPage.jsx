import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import DEFAULT_USERS from '../data/users.json';

export default function SignInPage(props) {
  const { currentUser, changeUserFunction } = props;

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    console.log(whichUser);
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    changeUserFunction(selectedUserObj)
  }

  //convenience
  //for convenience
  const userButtons = DEFAULT_USERS.map((userObj) => {
    let classListString = "btn user-icon"

    return (
      <Dropdown.Item className={classListString} key={userObj.userName}
        name={userObj.userId} onClick={handleClick}
      >
        <img src={userObj.userImg} alt={userObj.userName + " avatar"} /> {userObj.userName}
      </Dropdown.Item>
    )
  })

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <p className="lead">Pick a user:</p>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="light">
              Choose a User
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
              {userButtons}
          </Dropdown.Menu>
          </Dropdown>

        </div>
      </div>
    </div>
  )
}