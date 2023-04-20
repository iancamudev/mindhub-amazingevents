// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAValYBK6PTIqSTz4NIQG9Ov8Lk1X5JA2k",
  authDomain: "mindhub-recetas.firebaseapp.com",
  projectId: "mindhub-recetas",
  storageBucket: "mindhub-recetas.appspot.com",
  messagingSenderId: "657393118577",
  appId: "1:657393118577:web:15a94e37b417a8bd171ad0",
  measurementId: "G-3J9MD39RRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);