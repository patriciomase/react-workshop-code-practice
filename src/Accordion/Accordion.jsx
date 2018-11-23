import React from "react";

import "./styles.css";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility(event) {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const { title, children } = this.props;

    return (
      <div className="accordion" onClick={this.toggleVisibility}>
        <h2 className="title">{title}</h2>
        <div className="body">{!this.state.collapsed && children}</div>
      </div>
    );
  }
}

export default Accordion;
