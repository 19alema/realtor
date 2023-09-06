// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7XZQE-V5IyKlr8fXQPIZD5qaOrhKzsDw",
  authDomain: "realtor-clone-c0309.firebaseapp.com",
  projectId: "realtor-clone-c0309",
  storageBucket: "realtor-clone-c0309.appspot.com",
  messagingSenderId: "871450188291",
  appId: "1:871450188291:web:ca38f884048d9a431d8c36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();