import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/topics" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
