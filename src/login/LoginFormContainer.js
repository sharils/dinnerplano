import { path } from "ramda";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";
import { createStructuredSelector } from "reselect";
import redirectHomeIf from "../hoc/redirectHomeIf";
import { rfPromisifyOnSubmits } from "../util/reduxForm";
import LoginForm from "./LoginForm";
import { isLoggedIn, login } from "./userCredentials";

const mapStateToProps = createStructuredSelector({
  isLoggedIn
});
const mapDispatchToProps = rfPromisifyOnSubmits({ onSubmit: login });

export default compose(
  setDisplayName("LoginFormContainer"),
  connect(mapStateToProps, mapDispatchToProps),
  redirectHomeIf(path(["isLoggedIn"]))
)(LoginForm);
