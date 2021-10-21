import React from 'react';

export default class Card extends React.Component {
  static defaultProps = {
    cardColor: 'white',
    height: 100,
    width: 100
  };

  render = () => {
    const { props } = this;
    const style = {
      backgroundColor: props.cardColor,
      height: props.height,
      width: props.width
    };
    console.log(props.cardColor);
    return <div style={style}></div>
  };
};