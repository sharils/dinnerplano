import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

export default function Provizanto({ initialState, middlewares, children }) {
  return (
    <Provider store={configureStore(middlewares)(initialState)}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
}
Provizanto.defaultProps = {
  initialState: {},
  middlewares: []
};
Provizanto.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  initialState: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  middlewares: PropTypes.arrayOf(PropTypes.func)
};
