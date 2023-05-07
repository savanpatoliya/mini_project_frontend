// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmFOZh-uSJRe6CKyL8mQGyRiKEYvC8KoY",
  authDomain: "miniproject-9a10d.firebaseapp.com",
  projectId: "miniproject-9a10d",
  storageBucket: "miniproject-9a10d.appspot.com",
  messagingSenderId: "1095750048622",
  appId: "1:1095750048622:web:897ca0e8fa9e8aad353f7f",
  measurementId: "G-5SCLRQMS3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}