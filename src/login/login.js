import { takeLatest } from "redux-saga/effects";
import { rfCreateAction } from "../util/reduxForm";

const START = "dinnerplano/login/START";

export const startLogin = rfCreateAction(START);

function* login({ payload: { email, password }, meta: [resolve, reject] }) {
}

export function* loginSupervisor() {
  yield takeLatest(START, login);
}
