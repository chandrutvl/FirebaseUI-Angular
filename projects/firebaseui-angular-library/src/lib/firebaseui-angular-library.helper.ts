/*
 * Created by Raphael Jenni
 * Copyright (c) 2017 Raphael Jenni
 */

import * as firebaseOriginal from 'firebase/app';
// import UserCredential = firebase.auth.UserCredential;
import * as firebaseuiOriginal from 'firebaseui';

export const firebase = firebaseOriginal;
export const firebaseui = firebaseuiOriginal;

export type NativeFirebaseUIAuthConfig = firebaseuiOriginal.auth.Config;


export class FirebaseUISignInSuccessWithAuthResult {
  authResult: firebaseOriginal.default.auth.UserCredential;
  redirectUrl: string;
}

export class FirebaseUISignInFailure {
  code: string;
  credential: firebaseOriginal.default.auth.AuthCredential;
}
