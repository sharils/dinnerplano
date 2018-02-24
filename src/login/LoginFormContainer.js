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
  setLoginEmail,
  setLoginPassword
};

const mergeProps = ({ loginEmail, loginPassword }, dispatchProps) => ({
  email: {
    onChange: e => dispatchProps.setLoginEmail(e.target.value),
    value: loginEmail
  },
  password: {
    onChange: e => dispatchProps.setLoginPassword(e.target.value),
    value: loginPassword
  }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  LoginForm
);
