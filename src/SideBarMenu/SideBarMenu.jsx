import React from "react";

const generalStyles = {
  color: "white",
  position: "fixed",
  left: 0,
  height: "100%",
  width: "80px",
  background: "grey",
  top: 0,
  transform: "translateX(-79px)",
  transition: "all 0.2s ease-in-out"
};

class SideBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }
  render() {
    const overrideStyles = this.state.collapsed ? {} : { transform: "none" };
    const styles = { ...generalStyles, ...overrideStyles };
    return (
      <nav
        style={styles}
        onMouseOver={e => this.setState({ collapsed: false })}
      >
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </nav>
    );
  }
}

export default SideBarMenu;
