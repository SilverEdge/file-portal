// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF0Th5c8IPmV6INhPKHzCQsFobO85_aFg",
  authDomain: "file-portal-babcc.firebaseapp.com",
  projectId: "file-portal-babcc",
  storageBucket: "file-portal-babcc.appspot.com",
  messagingSenderId: "707375239303",
  appId: "1:707375239303:web:6086417cb353e563e1a822",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the constant that initializes our firebase config
export default app;
