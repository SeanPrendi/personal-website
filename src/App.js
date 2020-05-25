import React from "react";
import MainPage from "./pages/mainpage";
import BlogPage from "./pages/blogpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
