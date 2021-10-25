import React from 'react';

class DataFetcher extends React.Component {
  state = {
    loading: false,
    data: null
  };

  render = () => {
    const { props, state } = this;
    const { children } = props;
    const { loading, data } = state;

    return children(loading, data);
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => this.setState({ data, loading: false }));
  };
}

export default DataFetcher;