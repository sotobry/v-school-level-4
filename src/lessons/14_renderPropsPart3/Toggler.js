import React from 'react';
import PropTypes from 'prop-types';

class Toggler extends React.Component {
  static propTypes = { defaultIsOnValue: PropTypes.bool };
  static defaultProps = { defaultIsOnValue: true };

  state = { isOn: this.props.defaultIsOnValue };

  toggle = () => this.setState(state => ({
    isOn: !state.isOn
  }));

  render = () => {
    const { props, state, toggle } = this;
    const { render } = props;
    const { isOn } = state;

    return render(isOn, toggle);
  };
};

export default Toggler;