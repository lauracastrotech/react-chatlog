import { useState, useEffect } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import LikeCount from './components/LikeCount';
import HeaderTitle from './components/HeaderTitle';
import data from './data/messages.json';

const App = () => {
  const [messages, setMessages] = useState(data);
  const [count, setCount] = useState(0);
  const [participants, setParticipants] = useState([]);

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
  }, [messages]);

  useEffect(() => {
    const countParticipants = () => {
      const participants = messages.map(message => {
        return message.sender;
      });
      setParticipants([...new Set(participants)]);
    };

    return () => {
      countParticipants();
    }
  }, [messages]);


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
        <HeaderTitle participantNames={participants}/>
        <LikeCount likesCount={count} updateLikesCount={setCount}/>
      </header>
      <main>
        <ChatLog entries={messages} updateEntries={updateLikes}/>
      </main>
    </div>
  );
};

export default App;

