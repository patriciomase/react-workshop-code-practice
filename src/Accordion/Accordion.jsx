const React = require("react");
const PropTypes = require("prop-types");

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
        <div className="title">{title}</div>
        {!this.state.collapsed && children}
      </div>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

module.exports = Accordion;
