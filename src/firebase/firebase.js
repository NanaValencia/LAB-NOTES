import db  from "./firebaseConfig.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import {
getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
  serverTimestamp,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';

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

 export const saveNotes = (title, note) => addDoc(collection(db, 'Notes'), {
  title, note
});
