function MessageListItem(props) {
  console.log(props);

  const {msg, isLoud} = props;
  // const msg = props.msg;
  // const isLoud = props.isLoud;

  let text = msg;
  if(isLoud){
    text = text.toUpperCase();
  }

  return (
    <li>{text}</li>
  )
}

export function MessageList(props) {
  return (
    <ul>
      <MessageListItem msg="Goodbye!" isLoud={true} />

      <MessageListItem msg="Hello world" />
      <MessageListItem msg="See you later, alligator" />
      <MessageListItem msg="After a while, crocodile" isLoud={true} />
    </ul>
  )
}
