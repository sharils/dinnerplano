import { combineReducers } from "redux";
import loginEmail from "./login/loginEmail";
import loginPassword from "./login/loginPassword";

export default combineReducers({
  loginEmail,
  loginPassword
});
