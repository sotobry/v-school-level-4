const withFavoriteNumber = Component => {
  return props => <Component favNum='11'
    {...props}
  />;
};

export default withFavoriteNumber;