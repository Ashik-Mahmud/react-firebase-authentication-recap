// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3NEUnOPegqZo1uBaR99yb6AamSP8HAKM",
  authDomain: "uploadedfile-8f802.firebaseapp.com",
  projectId: "uploadedfile-8f802",
  storageBucket: "uploadedfile-8f802.appspot.com",
  messagingSenderId: "286688550367",
  appId: "1:286688550367:web:0c05a047c1e7c2ebeef86a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)