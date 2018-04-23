import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import root reducer
import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

// create an object/state for default data
const defaultState = {
  posts: posts,
  comments: comments
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
