import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({entries}) => {
  const messages = [...entries];

  const chatEntries = messages.map( (message) => {
    return (
      <li key={message.id}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
        />
      </li>
    );
  });

  return (
    <section className='chat-log'>
      <ul className='messages'>
        {chatEntries}
      </ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object)
};
export default ChatLog;
