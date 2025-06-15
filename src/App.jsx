import { useState, useEffect } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import LikeCount from './components/LikeCount';
import data from './data/messages.json';

const App = () => {
  const [messages, setMessages] = useState(data);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const countLikes = () => {
      const likes = messages.reduce((totalLikes, message) => {
        if(message.liked){
          return totalLikes + 1;
        }
        return totalLikes;
      }, 0);

      setCount(likes);
    };
    return () => {
      countLikes();
    }
  }, [messages])
  
  const updateLikes = (messageId) => {
    let copyMessages = [...messages];

    for(const message of copyMessages){
      if(message.id === messageId){
        message.liked = !message.liked;
      }
    }

    setMessages(copyMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <LikeCount likesCount={count} updateLikesCount={setCount}/>
        <ChatLog entries={messages} updateEntries={updateLikes}/>
      </main>
    </div>
  );
};

export default App;

