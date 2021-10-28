import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import PostForm from "./components/postform";
import Posts from "./components/posts";

import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
