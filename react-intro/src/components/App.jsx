import { HeaderComponent } from './Header.jsx';
import { MessageList } from './Messages.jsx';

export default function App(props) {

  const imgUrl = './img/puppy.jpg';

  return (
    <>
      <HeaderComponent />
      <main>
        <p>This is the main section</p>
        <p>A number: {3+40}</p>
        <MessageList />
        <img src={imgUrl} alt="a puppy" />
      </main>
    </>
  );
}