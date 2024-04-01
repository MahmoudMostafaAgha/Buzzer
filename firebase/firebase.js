import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC5bt9RsIW56kMGuZ6MwfcQUVeL2szioQ",
  authDomain: "buzzer-1841b.firebaseapp.com",
  projectId: "buzzer-1841b",
  storageBucket: "buzzer-1841b.appspot.com",
  messagingSenderId: "775349225869",
  appId: "1:775349225869:web:d4845e20f042770a8015c4",
  measurementId: "G-3FHPJQGKPP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
