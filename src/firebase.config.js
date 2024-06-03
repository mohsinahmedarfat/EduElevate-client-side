// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgQAygeJd8-4A1dCMp8f5qNz1XYu6lgv8",
  authDomain: "eduelevate.firebaseapp.com",
  projectId: "eduelevate",
  storageBucket: "eduelevate.appspot.com",
  messagingSenderId: "150306189773",
  appId: "1:150306189773:web:1c360373d70727ba9e1484",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
