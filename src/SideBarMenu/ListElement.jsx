import React from "react";

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  render() {
    return (
      <li
        className={this.state.selected ? "active" : ""}
        onClick={() => this.setState({ selected: !this.state.selected })}
      >
        {this.props.children}
      </li>
    );
  }
}

export default ListElement;
