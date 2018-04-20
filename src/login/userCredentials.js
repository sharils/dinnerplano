import { createAction, handleActions } from "redux-actions";
import { SubmissionError } from "redux-form";
import { call, put } from "redux-saga/effects";
import { createSelector } from "reselect";
import { not } from "ramda";
import { fbIsLoginError } from "../util/firebase";
import { rfCreateAction } from "../util/reduxForm";
import mayCall from "../util/mayCall";
import cslgr from "../util/cslgr";

export const LOGIN = "dinnerplano/userCredentials/LOGIN";
export const LOGOUT = "dinnerplano/userCredentials/LOGOUT";
const RESET = "dinnerplano/userCredentials/RESET";
const SET = "dinnerplano/userCredentials/SET";

const userCredentialsSelector = state => state.userCredentials;
export const isLoggedIn = createSelector(userCredentialsSelector, Boolean);
export const isntLoggedIn = createSelector(userCredentialsSelector, not);

export const login = rfCreateAction(LOGIN);
export const logout = rfCreateAction(LOGOUT);
const set = createAction(SET);
const reset = createAction(RESET);

const initialState = null;
export default handleActions(
  {
    [RESET]: () => initialState,
    [SET]: (state, { payload }) => payload
  },
  initialState
);

export function* loginSaga(
  { signInAndRetrieveDataWithEmailAndPassword },
  { payload: { email, password }, meta: [resolve, reject] }
) {
  try {
    const userCredentials = yield call(
      signInAndRetrieveDataWithEmailAndPassword,
      email,
      password
    );
    yield put(set(userCredentials));
    const [called] = yield call(mayCall, resolve);
    cslgr.debug("[loginSaga] resolve called %o", called);
  } catch (e) {
    if (fbIsLoginError(e)) {
      reject(new SubmissionError({ _error: e.message }));
    } else {
      const [called] = yield call(mayCall, resolve);
      cslgr.debug("[loginSaga] resolve called %o", called);
      throw e;
    }
  }
}

export function* logoutSaga({ signOut }, { meta: [resolve] }) {
  try {
    yield call(signOut);
    yield put(reset());
  } finally {
    const [called] = yield call(mayCall, resolve);
    cslgr.debug("[loginSaga] resolve called %o", called);
  }
}
