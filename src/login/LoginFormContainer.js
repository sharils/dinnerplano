import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import LoginForm from "./LoginForm";
import { getLoginEmail, setLoginEmail } from "./loginEmail";
import { getLoginPassword, setLoginPassword } from "./loginPassword";

const mapStateToProps = createStructuredSelector({
  loginEmail: getLoginEmail,
  loginPassword: getLoginPassword
});

const mapDispatchToProps = {
  setLoginEmail: e => setLoginEmail(e.target.value),
  setLoginPassword: e => setLoginPassword(e.target.value)
};

const mergeProps = ({ loginEmail, loginPassword }, dispatchProps) => ({
  email: {
    onChange: dispatchProps.setLoginEmail,
    value: loginEmail
  },
  password: {
    onChange: dispatchProps.setLoginPassword,
    value: loginPassword
  }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  LoginForm
);
