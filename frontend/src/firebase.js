// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ZyHKna5YLTT5B4iqY1-peRUBMTUW36k",
  authDomain: "wchat-71749.firebaseapp.com",
  projectId: "wchat-71749",
  storageBucket: "wchat-71749.appspot.com",
  messagingSenderId: "435759792896",
  appId: "1:435759792896:web:c26b48c57ccb23d526e9e5",
  measurementId: "G-MX920MV47H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialze Firebase Authentification and get a reference to the service
const auth = getAuth(app);