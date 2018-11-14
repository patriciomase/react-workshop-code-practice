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
        <nav style={styles} onMouseOver={e => this.setState({ collapsed: false })}>
          <ul>
            <li>
              <Link to="/">
                <i class="fa fa-home" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i class="fa fa-info-circle" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link to="/users">
                <i class="fa fa-users" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default withRouter(SideBarMenu);
