import { path } from "ramda";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { branch, compose, setDisplayName, withProps } from "recompose";
import { createStructuredSelector } from "reselect";
import { isLoggedIn } from "../login/userCredentials";

const mapStateToProps = createStructuredSelector({
  isLoggedIn
});

export default compose(
  setDisplayName("LoginFormContainer"),
  connect(mapStateToProps, null),
  branch(
    path(["isLoggedIn"]),
    withProps({ to: "/home" }),
    withProps({ to: "/login" })
  )
)(Redirect);
