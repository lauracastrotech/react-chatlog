import './LikeCount.css';
import PropTypes from 'prop-types';
const LikeCount = ({ likesCount }) => {
  return (
    <section className='like-count'>
      <p id='likes'>{likesCount} ❤️s</p>
    </section>
  );
};

LikeCount.propTypes = {
  likesCount: PropTypes.number.isRequired
};
export default LikeCount;