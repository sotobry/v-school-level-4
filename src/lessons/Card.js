import PropTypes from 'prop-types';

const Card = props => {
  const style = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width
  };

  console.log(props.cardColor);
  return <div style={style}></div>;
};

Card.propTypes = {
  // cardColor: PropTypes.string.isRequired,
  cardColor: PropTypes.oneOf(['blue', 'red', 'green']),
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

Card.defaultProps = {
  // cardColor: 'white',
  // height: 100,
  // width: 100
};

export default Card;