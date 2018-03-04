import React from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import StoreProvider from "./init/StoreProvider";
import LoginFormContainer from "./login/LoginFormContainer";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </StoreProvider>
  );
}

export default App;
