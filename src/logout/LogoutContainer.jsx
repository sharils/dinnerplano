import { path } from "ramda";
import { compose } from "recompose";
import redirectHomeIf from "../hoc/redirectHomeIf";
import connectSelectors from "../hoc/connectSelectors";
import { isntLoggedIn } from "../login/userCredentials";
import LogoutPage from "./LogoutPage";

const mapSelectorToProps = {
  isntLoggedIn
};

export default compose(
  connectSelectors("LogoutContainer", mapSelectorToProps, null),
  redirectHomeIf(path(["isntLoggedIn"]))
)(LogoutPage);
