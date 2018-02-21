import PropTypes from "prop-types";
import React from "react";

export default function LoginForm({ email, password }) {
  return (
    <form>
      <label htmlFor="email">
        Email: <input type="email" id="email" {...email} />
      </label>
      <label htmlFor="password">
        Password: <input type="password" id="password" {...password} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
LoginForm.propTypes = {
  email: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  password: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired
};
