/** @format */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Form from "./Form";
import Info from "./Info";
import Video from "./Video";
import Switches from "./Switches";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Form />
        <Info />
        <Switches />
        <Video />
        <Switch>
          <Route path="/#info">
            <Info />
          </Route>
          <Route path="/#switches">
            <Switches />
          </Route>
          <Route path="/#video">
            <Video />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
