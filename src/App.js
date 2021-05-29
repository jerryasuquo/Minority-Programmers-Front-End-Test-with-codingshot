import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeBody from "./components/HomeBody";
import LearnBody from "./components/LearnBody";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomeBody} />
          <Route exact path="/learn-more" component={LearnBody} />
        </Switch>
      </div>
    );
  }
}

export default App;
