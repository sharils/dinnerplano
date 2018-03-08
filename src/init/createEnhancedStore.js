import { compose, partial } from "ramda";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = compose(
    partial(createStore, [reducers]),
    composeWithDevTools,
    applyMiddleware
  )(sagaMiddleware);

  sagaMiddleware.run(sagas);

  return store;
};
