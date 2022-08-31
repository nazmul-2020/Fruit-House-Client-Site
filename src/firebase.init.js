// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChgxwAcJNpRAhL-WfKnllPGfnG0VuMvrQ",
  authDomain: "fruits-house-9.firebaseapp.com",
  projectId: "fruits-house-9",
  storageBucket: "fruits-house-9.appspot.com",
  messagingSenderId: "156480129312",
  appId: "1:156480129312:web:140304ea2a0d232ec9ef45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default (auth)

