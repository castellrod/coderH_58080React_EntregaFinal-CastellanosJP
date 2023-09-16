// FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyAIvn5oQ2COuHNWpmx43gG2CQnSopcZNcM",
  authDomain: "reactproy-01.firebaseapp.com",
  projectId: "reactproy-01",
  storageBucket: "reactproy-01.appspot.com",
  messagingSenderId: "103486897465",
  appId: "1:103486897465:web:3207fe83c28b45a5a77ce8"
};*/
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
