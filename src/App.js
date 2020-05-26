import React from "react";
import MainPage from "./pages/mainpage";
import BlogPage from "./pages/blogpage";
import BlogPost from "./pages/blogpost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import postlist from "./data/postlist";
import posts from "./data/posts";

function App() {
  console.log(posts)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        {postlist.map((post, idx) => {
          return (
            <Route path={"/" + post} key={idx}>
              <BlogPost post={posts[post]} />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
