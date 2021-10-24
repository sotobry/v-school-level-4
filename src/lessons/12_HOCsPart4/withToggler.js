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
    const { component: C, defaultIsOnValue, ...restOfProps } = props;
    const { isOn } = state;
    return <C {...restOfProps} toggle={toggle} isOn={isOn} />
  };
};

const withToggler = (component, defaultIsOnValue) =>
  props =>
    <Toggler
      component={component}
      defaultIsOnValue={defaultIsOnValue}
      {...props}
    />;

export default withToggler;