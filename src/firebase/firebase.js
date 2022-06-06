import { firebaseConfig } from "./firebaseConfig.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const loginWithGoogle = () => {
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
}
 export const logout = () => {
    return signOut(auth)
 }
