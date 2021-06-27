import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import Navbar from "./Components/Navbar";
import Alien from "./Pages/Alien";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/alien">
          <Alien />
        </Route>

        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
