import { createAction, handleAction } from "redux-actions";
import { call, put, select } from "redux-saga/effects";
import * as firebase from "../firebase";

const SET = "dinnerplano/firebaseApp/SET";

const setFirebaseApp = createAction(SET);

const getFirebaseApp = state => state.firebaseApp;

export default handleAction(
  setFirebaseApp,
  (state, { payload }) => payload,
  null
);

export function* initializeApp({
  apiKey = process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL = process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
} = {}) {
  const firebaseApp = yield call([firebase, "initializeApp"], {
    apiKey,
    authDomain,
    databaseURL,
    storageBucket
  });
  yield put(setFirebaseApp(firebaseApp));
}

export function* signInAndRetrieveDataWithEmailAndPassword(...args) {
  const firebaseApp = yield select(getFirebaseApp);

  const userCredentials = yield call(
    [firebaseApp.auth(), "signInAndRetrieveDataWithEmailAndPassword"],
    ...args
  );

  return userCredentials;
}
