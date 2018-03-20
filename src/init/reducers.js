import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import userCredentials from "../login/userCredentials";

export default combineReducers({
  form,
  userCredentials
});
