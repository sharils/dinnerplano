import { path } from "ramda";
import { branch, compose, renderComponent } from "recompose";
import connectSelectors from "../hoc/connectSelectors";
import { isntLoggedIn } from "../login/userCredentials";
import LoginFormContainer from "../login/LoginFormContainer";
import Authenticated from "./Authenticated";

const mapStateToProps = {
  isntLoggedIn
};

export default compose(
  connectSelectors("AuthenticatedContainer", mapStateToProps, null),
  branch(path(["isntLoggedIn"]), renderComponent(LoginFormContainer))
)(Authenticated);
