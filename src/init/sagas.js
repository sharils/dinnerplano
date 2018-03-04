import { all } from "redux-saga/effects";
import { loginSupervisor } from "../login/userCredentials";
import { initializeApp } from "./firebaseApp";

export default function* sagas() {
  yield all([initializeApp(), loginSupervisor()]);
}
