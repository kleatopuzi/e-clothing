import { call, put, takeLatest, all } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  createUserProfileDocument,
  googleProvider,
  auth,
} from "../../firebase/firebase-utils";
import { googleSignInFailure, googleSignInSuccess } from "./user.actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
    // console.log("aaaaaaa", userRef);
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}