import './App.css';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const chatEntryData = {
    'sender':'Vladimir',
    'body':'why are you arguing with me',
    'timeStamp':'2018-05-29T22:49:06+00:00'
  };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry props={chatEntryData}/>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
