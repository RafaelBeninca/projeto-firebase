// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAYKRfAdQgiaMmHC1M249Ko4nYfTvNUq4",
  authDomain: "task-59eeb.firebaseapp.com",
  projectId: "task-59eeb",
  storageBucket: "task-59eeb.appspot.com",
  messagingSenderId: "880746733125",
  appId: "1:880746733125:web:499a855649ff50d4470d2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;