import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(sagas);

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
StoreProvider.propTypes = {
  children: PropTypes.element.isRequired
};
