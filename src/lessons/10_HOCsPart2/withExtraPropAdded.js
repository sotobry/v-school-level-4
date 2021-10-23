const withExtraPropAdded = Component => {

  return props => <Component anotherProp='blah blah blah' {...props} />;
};

export default withExtraPropAdded;