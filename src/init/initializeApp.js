import { call, takeLatest } from "redux-saga/effects";
import { LOGIN, loginSaga } from "../login/userCredentials";
import * as firebase from "../firebase";

export default function* initializeApp({
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
  yield takeLatest(LOGIN, loginSaga, {
    signInAndRetrieveDataWithEmailAndPassword: [
      firebaseApp.auth(),
      "signInAndRetrieveDataWithEmailAndPassword"
    ]
  });
}
