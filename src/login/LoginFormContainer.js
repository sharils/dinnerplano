import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { startLogin } from "./userCredentials";
import { rfBindActionCreators } from "../util/reduxForm";

const mapStateToProps = null;

const mapDispatchToProps = rfBindActionCreators.bind(null, {
  onSubmit: startLogin
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
