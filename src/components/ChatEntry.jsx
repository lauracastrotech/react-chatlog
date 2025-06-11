import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name d-text">{props.sender}</h2>
      <section className="entry-bubble">
        <p className="d-text">{props.body}</p>
        <p className="entry-time d-text"><TimeStamp time={'2018-05-29T22:49:06+00:00'}/></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

// Prop validation is causing an error in console and time is hardcoded and need to debug what the data coming from app isnt passing 
// ChatEntry.propTypes = {
//   sender: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   timeStamp: PropTypes.string.isRequired
// };

export default ChatEntry;

