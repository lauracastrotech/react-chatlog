import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, updateLikes}) => {
  const likeButton = liked ? '❤️': '🤍';
  const entryLocation = sender !== 'Vladimir' ? 'chat-entry remote' : 'chat-entry local';

  const handleLikeBtn = () => {
    updateLikes(id);
  }

  return (
    <div className={entryLocation}>
      <h2 className="entry-name d-text">{sender}</h2>
      <section className="entry-bubble">
        <p className="d-text">{body}</p>
        <p className="entry-time d-text"><TimeStamp time={timeStamp}/></p>
        <button onClick={handleLikeBtn} className="like">{likeButton}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  updateLikes: PropTypes.func.isRequired
};


export default ChatEntry;

