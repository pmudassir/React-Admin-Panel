// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByGac_nOVrEn8G2pLQFFzHtTiQKUOJ758",
  authDomain: "fitzy-ecommerce.firebaseapp.com",
  projectId: "fitzy-ecommerce",
  storageBucket: "fitzy-ecommerce.appspot.com",
  messagingSenderId: "634286360245",
  appId: "1:634286360245:web:5a8f9c44604495917760fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;