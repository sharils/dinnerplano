import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StoreProvider from "./StoreProvider";
import LoginFormContainer from "./login/LoginFormContainer";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LoginFormContainer />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </StoreProvider>
  );
}

export default App;
