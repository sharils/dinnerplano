import { path } from "ramda";
import { compose } from "recompose";
import redirectHomeIf from "../hoc/redirectHomeIf";
import connectSelectors from "../hoc/connectSelectors";
import { isntLoggedIn } from "../login/userCredentials";
import Authenticated from "./Authenticated";

const mapStateToProps = {
  isntLoggedIn
};

export default compose(
  connectSelectors("AuthenticatedContainer", mapStateToProps, null),
  redirectHomeIf(path(["isntLoggedIn"]))
)(Authenticated);
