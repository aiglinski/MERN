import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import ShoppingList from "./components/ShoppingList";

import { Provider } from "react-redux";

import store from "./components/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
