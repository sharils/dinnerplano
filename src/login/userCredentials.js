import { createAction, handleAction } from "redux-actions";
import { SubmissionError } from "redux-form";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { signInAndRetrieveDataWithEmailAndPassword } from "../init/firebaseApp";
import { fbIsLoginError } from "../util/firebase";
import { rfCreateAction } from "../util/reduxForm";

const START = "dinnerplano/userCredentials/START";
const END = "dinnerplano/userCredentials/END";

export const isLoggedIn = state => Boolean(state.userCredentials);

export const startLogin = rfCreateAction(START);
const endLogin = createAction(END);

export default handleAction(endLogin, (state, { payload }) => payload, null);

function* login({ payload: { email, password }, meta: [resolve, reject] }) {
  if (yield select(isLoggedIn)) {
    const e = new Error("User is already logged in");
    e.name = "DevelopmentTimeError";
    resolve();
    throw e;
  }

  try {
    const userCredentials = yield call(
      signInAndRetrieveDataWithEmailAndPassword,
      email,
      password
    );
    yield put(endLogin(userCredentials));
    resolve();
  } catch (e) {
    if (fbIsLoginError(e)) {
      reject(new SubmissionError({ _error: e.message }));
    } else {
      resolve();
      throw e;
    }
  }
}

export function* loginSupervisor() {
  yield takeLatest(START, login);
}
