import React from "react";

import { Link, withRouter } from "react-router-dom";

import "./styles.css";

const menuStructure = [
  {
    to: "/",
    icon: "fas fa-home"
  },
  {
    to: "/about",
    icon: "fas fa-info-circle"
  },
  {
    to: "/videos",
    icon: "fas fa-video"
  }
];

class SideBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }
  render() {
    const styles = this.state.collapsed ? {} : { transform: "none" };
    const { pathname } = this.props.location;
    return (
      <React.Fragment>
        {!this.state.collapsed && (
          <div
            className="overlay"
            onMouseOver={e =>
              setTimeout(() => {
                this.setState({ collapsed: true });
              }, 100)
            }
          />
        )}
        <nav
          style={styles}
          onMouseOver={e => this.setState({ collapsed: false })}
        >
          <ul>
            {menuStructure.map(elem => {
              return (
                <li className={elem.to === pathname ? "active" : ""}>
                  <Link to={elem.to}>
                    <i className={elem.icon} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default withRouter(SideBarMenu);
