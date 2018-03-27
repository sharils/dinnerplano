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
import { isntLoggedIn } from "../login/userCredentials";
import Logout from "./Logout";

const mapStateToProps = createStructuredSelector({
  isntLoggedIn
});
const redirect = compose(withProps({ to: "/" }), renderComponent(Redirect));

export default compose(
  setDisplayName("LogoutContainer"),
  connect(mapStateToProps, null),
  branch(path(["isntLoggedIn"]), redirect)
)(Logout);
