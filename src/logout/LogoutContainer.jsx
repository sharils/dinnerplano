import { path } from "ramda";
import { compose } from "recompose";
import redirectHomeIf from "../hoc/redirectHomeIf";
import connectSelectors from "../hoc/connectSelectors";
import { isntLoggedIn } from "../login/userCredentials";
import LogoutPage from "./LogoutPage";

const mapStateToProps = {
  isntLoggedIn
};

export default compose(
  connectSelectors("LogoutContainer", mapStateToProps, null),
  redirectHomeIf(path(["isntLoggedIn"]))
)(LogoutPage);
