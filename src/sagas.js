import { all } from "redux-saga/effects";
import { initializeApp } from "./init/firebaseApp";
import { loginSupervisor } from "./login/userCredentials";

export default function* sagas() {
  yield all([initializeApp(), loginSupervisor()]);
}
