import * as firebase from "firebase";

export const fbIsLoginError = e => {
  if (e instanceof firebase.auth.Error) {
    switch (e.code) {
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
      case "auth/wrong-password":
        return true;
      default:
        return false;
    }
  }
  return false;
};
