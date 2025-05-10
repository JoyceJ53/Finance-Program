
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2l2ta9ZJheLOKyIENsMbsxdj4jIpgc3Q",
  authDomain: "finances-72ca6.firebaseapp.com",
  projectId: "finances-72ca6",
  storageBucket: "finances-72ca6.firebasestorage.app",
  messagingSenderId: "351654327479",
  appId: "1:351654327479:web:b5f982b408da671d094932",
  measurementId: "G-5XQS05LX8Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);