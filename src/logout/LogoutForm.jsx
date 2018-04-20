import React from "react";
import { propTypes, reduxForm } from "redux-form";

function LogoutForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <button type="submit" disabled={props.submitting}>
        Logout
      </button>
      {props.error}
    </form>
  );
}
LogoutForm.propTypes = propTypes;

export default reduxForm({
  form: "LogoutForm"
})(LogoutForm);
