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

    // return () => {
    countParticipants();
    // };
  }, [messages]);


  const updateLikes = (messageId) => {
    const updateMessages = messages.map( message => {
      if(message.id === messageId){
        message.liked = !message.liked;
      }
      return message;
    });
    setMessages(updateMessages);
  };

  const countLikes = () => {
    const likes = messages.reduce((totalLikes, message) => {
      if(message.liked){
        return totalLikes + 1;
      }
      return totalLikes;
    }, 0);
    console.log(messages[0]);
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

