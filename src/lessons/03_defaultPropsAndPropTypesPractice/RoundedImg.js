import PropTypes from 'prop-types';
import './RoundedImg.css';

const RoundedImg = ({ src, borderRadius }) =>
  <img className='RoundedImg'
    src={src}
    style={{ borderRadius }}
    alt=''
  />;

RoundedImg.propTypes = {
  src: PropTypes.string.isRequired,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
RoundedImg.defaultProps = {
  borderRadius: '50%'
};
export default RoundedImg;