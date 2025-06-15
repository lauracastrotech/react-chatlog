import PropTypes from 'prop-types';
import './HeaderTitle.css';

const HeaderTitle = ({participantNames}) => {
  const participantsArray = Array.from(participantNames);

  const MessageParticipants = () => {
    return participantsArray.map( (name, indx) => {
      return (
        <p key={indx}>{name}</p>
      );
    });
  };

  return (
    <div>
      <h1>Chat Log</h1>
      <MessageParticipants />
    </div>
  );
};

HeaderTitle.propTypes = {
  participantNames: PropTypes.instanceOf(Array).isRequired
};
export default HeaderTitle;
