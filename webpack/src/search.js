import React from "react";
import ReactDOM from "react-dom";

import logo from "./access/logo.gif";

import "./search.css";
import "./search.less";

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">
        Search Test Watch1
        <img src={logo} />
      </div>
    );
  }
}
ReactDOM.render(<Search />, document.getElementById("root"));
