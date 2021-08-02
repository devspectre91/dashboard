import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="columns">
          <div className="column  sidebar is-2 has-background-info-light">
            <Sidebar />
          </div>
          <div className="column main m-0 px-0 py-4 ">
            <Main />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
