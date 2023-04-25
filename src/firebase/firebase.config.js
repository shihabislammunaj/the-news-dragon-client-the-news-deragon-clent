// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// https://console.firebase.google.com/project/the-news-deragon/authentication/providers
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD52Lgm3B_FZQ5DRifm-zpZxcbNUpLGqGM",
  authDomain: "the-news-deragon.firebaseapp.com",
  projectId: "the-news-deragon",
  storageBucket: "the-news-deragon.appspot.com",
  messagingSenderId: "736638615777",
  appId: "1:736638615777:web:62dd686111d305180ff7a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;