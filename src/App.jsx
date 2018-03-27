import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import createEnhancedStore from "./init/createEnhancedStore";
import HomeContainer from "./init/HomeContainer";
import LoginFormContainer from "./login/LoginFormContainer";
import LogoutContainer from "./logout/LogoutContainer";

function App() {
  return (
    <Provider store={createEnhancedStore()}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/login" component={LoginFormContainer} />
          <Route path="/logout" component={LogoutContainer} />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
