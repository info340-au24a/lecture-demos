import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props) {

  //have: [{},{},{}]
  console.log(INITIAL_CHAT_LOG);

  const msgElemArray = INITIAL_CHAT_LOG.map((msgObj) => {
    const transformed = (
      <MessageItem key={msgObj.timestamp} messageData={msgObj} />
    );
    return transformed;
  })

  //need: array of elements [<>,<>,<>]
  // const msgElemArray = [
  //   <MessageItem messageData={INITIAL_CHAT_LOG[0]} />,
  //   <MessageItem messageData={INITIAL_CHAT_LOG[1]} />,
  //   <MessageItem messageData={INITIAL_CHAT_LOG[2]} />,
  // ]

  return (
    <div>
      {msgElemArray}
    </div>
  )
}

function MessageItem(props) {
  console.log(props);
  const {userName, userImg, text} = props.messageData 

  return (
    <div className="message d-flex mb-3">
      <div className="me-2">
        <img src={userImg} alt={userName+"'s avatar"} />
      </div>
      <div>
        <p className="user-name">{userName}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}