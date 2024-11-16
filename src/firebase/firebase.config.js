// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJR5YfX20ks6Ochlaf8niUoTT1-9_LJpM",
  authDomain: "jk-real-estate-2e0f6.firebaseapp.com",
  projectId: "jk-real-estate-2e0f6",
  storageBucket: "jk-real-estate-2e0f6.firebasestorage.app",
  messagingSenderId: "676617959789",
  appId: "1:676617959789:web:d397111666df52cbbf0264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;