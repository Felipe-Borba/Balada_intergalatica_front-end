import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import Navbar from "./Components/Navbar";
import Alien from "./Pages/Alien";
import Page404 from "./Pages/Page404";
import AddAlien from "./Pages/AddAlien";
import Balada from "./Pages/Balada";
import AddBalada from "./Pages/AddBalada";
import Home from "./Pages/Home";
import CheckIn from "./Pages/CheckIn";
import Backlog from "./Pages/Backlog";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/backlog">
          <Backlog />
        </Route>

        <Route exact path="/checkIn">
          <CheckIn />
        </Route>

        <Route exact path="/alien">
          <Alien />
        </Route>

        <Route exact path="/addAlien">
          <AddAlien />
        </Route>

        <Route exact path="/balada">
          <Balada />
        </Route>

        <Route exact path="/addbalada">
          <AddBalada />
        </Route>

        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
