import './App.css';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const chatEntryData = {
    'id': 1,
    'sender': 'Joe Biden',
    'body': "Get out by 8am.  I'll count the silverware",
    'timeStamp': '2018-05-18T22:12:03Z',
    'liked' : false
  }
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <ChatEntry chatData={chatEntryData}/> */}
        <ChatEntry
          id={chatEntryData.id}
          sender={chatEntryData.sender}
          body={chatEntryData.body}
          timeStamp={chatEntryData.timeStamp}
          liked={chatEntryData.liked}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;

