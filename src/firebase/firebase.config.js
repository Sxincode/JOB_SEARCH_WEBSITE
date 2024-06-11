// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNXNtUgx-a6pUXfjBnLrC35I5dWw5lJdU",
  authDomain: "job-portal-demo-ff1ff.firebaseapp.com",
  projectId: "job-portal-demo-ff1ff",
  storageBucket: "job-portal-demo-ff1ff.appspot.com",
  messagingSenderId: "383685655471",
  appId: "1:383685655471:web:e90dcd6e039ccf26498d5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;