import React, {useState} from 'react';

export function ComposeForm(props) {
  const {howToAddMessage} = props;

  const [inputtedText, setInputtedText] = useState('');

  const handleChange = (event) => {
    const typedValue = event.target.value
    console.log(typedValue);
    setInputtedText(typedValue);
  }

  const handleClick = (event) => {
    console.log("submitting form");
    howToAddMessage(inputtedText);
  }


  return (
    <form className="my-2">
      <div className="input-group">
        <textarea className="form-control" rows="2" placeholder="Type a new message"
          value={inputtedText}
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-secondary" type="button" onClick={handleClick}>
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}