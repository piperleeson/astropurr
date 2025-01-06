// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCpMpPtsCYehUndO2-AZhA7pfjTOwfK-k",
  authDomain: "astropurr-979b2.firebaseapp.com",
  projectId: "astropurr-979b2",
  storageBucket: "astropurr-979b2.firebasestorage.app",
  messagingSenderId: "198655259741",
  appId: "1:198655259741:web:1c0520ce04bdb5472d09b4",
  measurementId: "G-HHQMMPTQ34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;