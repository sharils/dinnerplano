import { path } from "ramda";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";
import { createStructuredSelector } from "reselect";
import redirectHomeIf from "../hoc/redirectHomeIf";
import { isntLoggedIn } from "../login/userCredentials";
import Logout from "./Logout";

const mapStateToProps = createStructuredSelector({
  isntLoggedIn
});

export default compose(
  setDisplayName("LogoutContainer"),
  connect(mapStateToProps, null),
  redirectHomeIf(path(["isntLoggedIn"]))
)(Logout);
