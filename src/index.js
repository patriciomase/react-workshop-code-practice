import React from "react";
import ReactDOM from "react-dom";

import SideBarMenu from "./SideBarMenu/SideBarMenu.jsx";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <SideBarMenu />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
