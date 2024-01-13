// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnmNnJj0YhIJV1GDhevIRIvVUDUKRGzws",
  authDomain: "netflixwithroids.firebaseapp.com",
  projectId: "netflixwithroids",
  storageBucket: "netflixwithroids.appspot.com",
  messagingSenderId: "1062494256219",
  appId: "1:1062494256219:web:38e10649a4d164d0b7937e",
  measurementId: "G-52RSXEB082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;