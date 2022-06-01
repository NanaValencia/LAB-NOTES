import { initializeApp } from "firebase/app";



  // Import the functions you need from the SDKs you need
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA0EkMi7UY4uCYspHlIsfQVIZcdMDIdzzo",
    authDomain: "fun-notes.firebaseapp.com",
    projectId: "fun-notes",
    storageBucket: "fun-notes.appspot.com",
    messagingSenderId: "727256306942",
    appId: "1:727256306942:web:66de3ec69941fa27aac1af"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);

