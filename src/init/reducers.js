import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import userCredentials from "../login/userCredentials";
import firebaseApp from "./firebaseApp";

export default combineReducers({
  firebaseApp,
  form,
  userCredentials
});
