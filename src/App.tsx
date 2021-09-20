import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { Product } from "./pages/Product";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/:id">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
