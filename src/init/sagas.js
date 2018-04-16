import { call } from "redux-saga/effects";
import cslgr from "../util/cslgr";
import initializeApp from "./initializeApp";

export default function* sagas() {
  try {
    yield call(initializeApp);
  } catch (e) {
    cslgr.error(e);
    throw e;
  }
}
