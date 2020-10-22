import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Default from "./components/Default";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Default} />
        <Route path='/default' render={() => <Redirect to= "/" />} />
      </Switch>
    </div>
  );
}