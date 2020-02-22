import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import HomePage from "./pages/home-page";
import ProfilePage from "./pages/profile-page";
import AboutPage from "./pages/about-page";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World App</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
