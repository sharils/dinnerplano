import * as firebase from "firebase";
import { call, take } from "redux-saga/effects";
import { LOGIN, LOGOUT, loginSaga, logoutSaga } from "../login/userCredentials";

export default function* initializeApp({
  apiKey = process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL = process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
} = {}) {
  const app = yield call([firebase, firebase.initializeApp], {
    apiKey,
    authDomain,
    databaseURL,
    storageBucket
  });

  const auth = yield call([app, app.auth]);

  for (;;) {
    const action = yield take(LOGIN);
    yield call(
      loginSaga,
      {
        signInAndRetrieveDataWithEmailAndPassword: [
          auth,
          auth.signInAndRetrieveDataWithEmailAndPassword
        ]
      },
      action
    );
    yield take(LOGOUT);
    yield call(logoutSaga, { signOut: [auth, auth.signOut] });
  }
}
