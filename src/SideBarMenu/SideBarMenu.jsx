import React from "react";

import { Link, withRouter } from "react-router-dom";

import "./styles.css";

class SideBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }
  render() {
    const styles = this.state.collapsed ? {} : { transform: "none" };
    return (
      <React.Fragment>
        {!this.state.collapsed && <div className="overlay" />}
        <nav style={styles} onMouseOver={e => this.setState({ collapsed: false })}>
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-home" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="fas fa-info-circle" />
              </Link>
            </li>
            <li>
              <Link to="/videos">
                <i className="fas fa-video" />
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default withRouter(SideBarMenu);
