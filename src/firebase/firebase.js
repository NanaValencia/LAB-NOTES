import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
  } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
  
  import {
    initializeApp,
  } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
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
  } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
  import { firebaseConfig } from './firebaseConfig.js';

const app = ​​initializeApp(firebaseConfig);
​​const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
} catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    signInWithGoogle,
    logout,
  };