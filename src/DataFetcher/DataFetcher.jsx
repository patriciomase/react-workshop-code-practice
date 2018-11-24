import React from "react";

class DataFetcher extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    const { service } = this.props;
    service &&
      service().then(response =>
        this.setState({
          data: response.data
        })
      );
  }

  render() {
    return this.props.children(this.state.data);
  }
}

export default DataFetcher;
