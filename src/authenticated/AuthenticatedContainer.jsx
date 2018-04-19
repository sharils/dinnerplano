import { path } from "ramda";
import { branch, compose, renderComponent } from "recompose";
import connectSelectors from "../hoc/connectSelectors";
import { isntLoggedIn } from "../login/userCredentials";
import LoginFormContainer from "../login/LoginFormContainer";
import Authenticated from "./Authenticated";

const mapSelectorToProps = {
  isntLoggedIn
};

export default compose(
  connectSelectors("AuthenticatedContainer", mapSelectorToProps, null),
  branch(path(["isntLoggedIn"]), renderComponent(LoginFormContainer))
)(Authenticated);
