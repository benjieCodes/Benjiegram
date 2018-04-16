import React from "react";
import { render } from "react-dom";

// CSS
import css from "./styles/style.styl";

// Components
import Main from "./components/Main";
import PhotoGrid from "./components/PhotoGrid";
import SinglePage from "./components/SinglePage";

// router
import { Router, Route, IndexRoute, browserHistory } from "react-router";

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Route path="/view/:postId" component={SinglePage} />
    </Route>
  </Router>
);
render(router, document.getElementById("root"));
