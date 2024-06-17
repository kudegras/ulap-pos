// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMUpvZRFX_fIORc_uVuvK1TUxTreq7rew",
  authDomain: "ulap-pos.firebaseapp.com",
  projectId: "ulap-pos",
  storageBucket: "ulap-pos.appspot.com",
  messagingSenderId: "926358532476",
  appId: "1:926358532476:web:db4ca90a08d13be78e34f9",
  measurementId: "G-BKKB9JEKHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
