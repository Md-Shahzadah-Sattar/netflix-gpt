
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtGokhAzHRM6SsKh6_HmNzig8h0wOoV-0",
  authDomain: "netflixgpt-84033.firebaseapp.com",
  projectId: "netflixgpt-84033",
  storageBucket: "netflixgpt-84033.firebasestorage.app",
  messagingSenderId: "1042328136891",
  appId: "1:1042328136891:web:64ccfeb9e807a594ad0d9e",
  measurementId: "G-6RMWW2F99V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();