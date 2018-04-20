import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";
import { rfPromisifyOnSubmits } from "../util/reduxForm";
import { logout } from "../login/userCredentials";
import LogoutForm from "./LogoutForm";

const mapDispatchToProps = rfPromisifyOnSubmits({ onSubmit: logout });

export default compose(
  setDisplayName("LogoutFormContainer"),
  connect(null, mapDispatchToProps)
)(LogoutForm);
