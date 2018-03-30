import { path } from "ramda";
import { compose } from "recompose";
import redirectHomeIf from "../hoc/redirectHomeIf";
import connectSelectors from "../hoc/connectSelectors";
import { rfPromisifyOnSubmits } from "../util/reduxForm";
import LoginForm from "./LoginForm";
import { isLoggedIn, login } from "./userCredentials";

const mapStateToProps = {
  isLoggedIn
};
const mapDispatchToProps = rfPromisifyOnSubmits({ onSubmit: login });

export default compose(
  connectSelectors("LoginFormContainer", mapStateToProps, mapDispatchToProps),
  redirectHomeIf(path(["isLoggedIn"]))
)(LoginForm);
