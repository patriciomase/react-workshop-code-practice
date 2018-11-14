import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Videos from "./Pages/Videos.jsx";
import SideBarMenu from "./SideBarMenu/SideBarMenu.jsx";

import "./styles.css";

const About = () => <h2>About</h2>;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Welcome to React Training</h1>
          <SideBarMenu />
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/videos/" component={Videos} />
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
