// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnqbjLhw42EWeZLfD9bUL8Tb7rb04iQPc",
  authDomain: "projeto-integrador-7a795.firebaseapp.com",
  projectId: "projeto-integrador-7a795",
  storageBucket: "projeto-integrador-7a795.firebasestorage.app",
  messagingSenderId: "663810837644",
  appId: "1:663810837644:web:7f2609bee3c3ed35487fa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };