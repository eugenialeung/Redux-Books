import React, { Component } from "react";
import "../App.css";
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

import { Provider } from "react-redux";

import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BookList />
          <BookDetail />
        </div>
      </Provider>
    );
  }
}

export default App;
