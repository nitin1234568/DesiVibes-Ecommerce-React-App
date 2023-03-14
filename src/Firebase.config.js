// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5tssW-1MsiZgZmqUA4NB6YZnmPb8OS8o",
  authDomain: "desi-vibes-e-commerce.firebaseapp.com",
  projectId: "desi-vibes-e-commerce",
  storageBucket: "desi-vibes-e-commerce.appspot.com",
  messagingSenderId: "183125497626",
  appId: "1:183125497626:web:93a87602a05f8314517ea3",
  measurementId: "G-VWS4CR3MLQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
