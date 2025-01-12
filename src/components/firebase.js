// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAemGpfJdDxLsrjs1512DsaJX2bJtz4kLk",
  authDomain: "commet-2895c.firebaseapp.com",
  projectId: "commet-2895c",
  storageBucket: "commet-2895c.appspot.com",
  messagingSenderId: "946264157919",
  appId: "1:946264157919:web:e1a5cbd1faf63007cec36a",
  measurementId: "G-Y28LKRTZ2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;