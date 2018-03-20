import { call } from "redux-saga/effects";
import initializeApp from "./initializeApp";

export default function* sagas() {
  yield call(initializeApp);
}
