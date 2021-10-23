const withPointlessHOC = Component => {

  return props => <Component {...props} />;
};

export default withPointlessHOC;