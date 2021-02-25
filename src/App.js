import React from "react";
import MovieList from "./components/MovieList/MovieList";
import MovieDescription from "./components/MovieDescription/MovieDescription";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" component={MovieDescription} />
      </Switch>
    </React.Fragment>
  );
}

export default App;