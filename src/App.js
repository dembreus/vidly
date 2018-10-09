import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { Switch, Route, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Switch>
          <Route path="/rentals" component={Rentals} />
          <Route path="/customers" component={Customers} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
