import { all } from "redux-saga/effects";
import { loginSupervisor } from "./login/login";

export default function* sagas() {
  yield all([loginSupervisor()]);
}
