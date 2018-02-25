import React from "react";
import { Field, propTypes, reduxForm } from "redux-form";

function LoginForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
}
LoginForm.propTypes = propTypes;

export default reduxForm({
  form: "LoginForm"
})(LoginForm);
