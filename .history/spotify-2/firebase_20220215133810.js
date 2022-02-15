// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Fpur9R8HNgwn5ox9-yDatQUhydP83j0",
  authDomain: "spotify-clone-61e1c.firebaseapp.com",
  projectId: "spotify-clone-61e1c",
  storageBucket: "spotify-clone-61e1c.appspot.com",
  messagingSenderId: "728836176413",
  appId: "1:728836176413:web:4dd1c51e7cfa17414c24f4",
  measurementId: "G-9HEZJLWWEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);