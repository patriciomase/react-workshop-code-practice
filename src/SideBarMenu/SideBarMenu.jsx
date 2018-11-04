import React from "react";

import ListElement from "./ListElement.jsx";

import "./sideBarMenu.css";

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
          <ListElement>A</ListElement>
          <ListElement>B</ListElement>
          <ListElement>C</ListElement>
          <ListElement>D</ListElement>
        </ul>
      </nav>
    );
  }
}

export default SideBarMenu;
