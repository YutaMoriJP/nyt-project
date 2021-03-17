import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";

const App = () => {
  console.log(process.env);
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <h1>404 Not found</h1>
            <Link to="/">Go Back to your homepage</Link>
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
