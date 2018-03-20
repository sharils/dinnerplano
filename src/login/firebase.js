import { createAction, handleAction } from "redux-actions";
import { SubmissionError } from "redux-form";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fbAuthError,
  fbInitializeApp,
  fbSignInAndRetrieveDataWithEmailAndPassword
} from "../util/firebase";
import { rfCreateAction } from "../util/reduxForm";

const START = "dinnerplano/userCredentials/START";
const END = "dinnerplano/userCredentials/END";

export const login = rfCreateAction(START);
const endLogin = createAction(END);

export default handleAction(endLogin, (state, { payload }) => payload, null);

function* login({ payload: { email, password }, meta: [resolve, reject] }) {
  const firebaseApp = yield call(fbInitializeApp);

  try {
    const userCredentials = yield call(
      fbSignInAndRetrieveDataWithEmailAndPassword,
      firebaseApp,
      email,
      password
    );
    yield put(endLogin(userCredentials));
    resolve();
  } catch (e) {
    if (e instanceof fbAuthError) {
      reject(new SubmissionError({ _error: e.message }));
    } else {
      throw e;
    }
  }
}

export function* loginSupervisor() {
  yield takeLatest(START, login);
}
