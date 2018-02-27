import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import firebaseApp from "./init/firebaseApp";
import userCredentials from "./login/userCredentials";

export default combineReducers({
  firebaseApp,
  form,
  userCredentials
});
