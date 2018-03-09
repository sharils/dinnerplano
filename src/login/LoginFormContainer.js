import { path } from "ramda";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  branch,
  compose,
  renderComponent,
  setDisplayName,
  withProps
} from "recompose";
import { createStructuredSelector } from "reselect";
import { rfBindActionCreators } from "../util/reduxForm";
import LoginForm from "./LoginForm";
import { isLoggedIn, startLogin } from "./userCredentials";

const mapStateToProps = createStructuredSelector({
  isLoggedIn
});
const mapDispatchToProps = rfBindActionCreators.bind(null, {
  onSubmit: startLogin
});
const redirect = compose(withProps({ to: "/" }), renderComponent(Redirect));

export default compose(
  setDisplayName("LoginFormContainer"),
  connect(mapStateToProps, mapDispatchToProps),
  branch(path(["isLoggedIn"]), redirect)
)(LoginForm);
