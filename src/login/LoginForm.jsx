import React from "react";
import { Field, propTypes, reduxForm } from "redux-form";
import { rfGetSubmitDisabled } from "../util/reduxForm";

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="email">
        Email: <Field name="email" component="input" type="email" id="email" />
      </label>
      <label htmlFor="password">
        Password:{" "}
        <Field
          name="password"
          component="input"
          type="password"
          id="password"
        />
      </label>
      <button type="submit" disabled={rfGetSubmitDisabled(props)}>
        Login
      </button>
      {props.error}
    </form>
  );
}
LoginForm.propTypes = propTypes;

export default reduxForm({
  form: "LoginForm"
})(LoginForm);
