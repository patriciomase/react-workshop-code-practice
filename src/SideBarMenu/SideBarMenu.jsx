import React from "react";

import { Link, withRouter } from "react-router-dom";

import "./styles.css";

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
      <React.Fragment>
        {!this.state.collapsed && <div className="overlay" />}
        <nav
          style={styles}
          onMouseOver={e => this.setState({ collapsed: false })}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default withRouter(SideBarMenu);
