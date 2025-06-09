import './ChatEntry.css';

const ChatEntry = () => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">Replace with name of sender</h2>
      <section className="entry-bubble">
        <p>Replace with body of ChatEntry</p>
        <p className="entry-time">Replace with TimeStamp component</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
};

export default ChatEntry;

  // {
  //   "id": 1,
  //   "sender":"Vladimir",
  //   "body":"why are you arguing with me",
  //   "timeStamp":"2018-05-29T22:49:06+00:00",
  //   "liked": false
  // },
