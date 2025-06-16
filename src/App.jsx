import { useState, useEffect } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import LikeCount from './components/LikeCount';
import HeaderTitle from './components/HeaderTitle';
import data from './data/messages.json';

const App = () => {
  const [messages, setMessages] = useState(data);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const countParticipants = () => {
      const participants = messages.map(message => {
        return message.sender;
      });
      setParticipants([...new Set(participants)]);
    };

    countParticipants();
  }, [messages]);


  const updateLikes = (messageId) => {
    setMessages(updateMessages =>
      updateMessages.map(message => {
        if (message.id === messageId) {
          return { ...message, liked: !message.liked };
        }
        return message;
      })
    );
  };

  const countLikes = () => {
    const likes = messages.reduce((totalLikes, message) => {
      if(message.liked){
        return totalLikes + 1;
      }
      return totalLikes;
    }, 0);
    return likes;
  };

  return (
    <div id="App">
      <header>
        <HeaderTitle participantNames={participants}/>
        <LikeCount likesCount={countLikes()} />
      </header>
      <main>
        <ChatLog entries={messages} updateEntries={updateLikes}/>
      </main>
    </div>
  );
};

export default App;

