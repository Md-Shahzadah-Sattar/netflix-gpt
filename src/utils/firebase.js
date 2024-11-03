
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsg-HfjoFz9P_Iqma8oLjFH-9kYJfyPPM",
  authDomain: "netflix-gpt-6da89.firebaseapp.com",
  projectId: "netflix-gpt-6da89",
  storageBucket: "netflix-gpt-6da89.firebasestorage.app",
  messagingSenderId: "138875113212",
  appId: "1:138875113212:web:a2f00bc976643287b95179",
  measurementId: "G-6DHZW22C5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();