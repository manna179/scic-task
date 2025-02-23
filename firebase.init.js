// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTZ8j5gfWHjpyBZXKjgQC37YnuN8BLGZU",
  authDomain: "scic-task-8e1bb.firebaseapp.com",
  projectId: "scic-task-8e1bb",
  storageBucket: "scic-task-8e1bb.firebasestorage.app",
  messagingSenderId: "646164595687",
  appId: "1:646164595687:web:a6a075dc034fa5ad0d3342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;