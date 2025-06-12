import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({sender, body, timeStamp}) => {
  console.log(sender);
  return (
    <div className="chat-entry local">
      <h2 className="entry-name d-text">{sender}</h2>
      <section className="entry-bubble">
        <p className="d-text">{body}</p>
        <p className="entry-time d-text"><TimeStamp time={timeStamp}/></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool
};


export default ChatEntry;

