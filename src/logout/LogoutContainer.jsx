import { path } from "ramda";
import { compose } from "recompose";
import redirectHomeIf from "../hoc/redirectHomeIf";
import connectSelectors from "../hoc/connectSelectors";
import { isntLoggedIn } from "../login/userCredentials";
import Logout from "./Logout";

const mapStateToProps = {
  isntLoggedIn
};

export default compose(
  connectSelectors("LogoutContainer", mapStateToProps, null),
  redirectHomeIf(path(["isntLoggedIn"]))
)(Logout);
