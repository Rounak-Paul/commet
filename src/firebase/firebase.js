import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAemGpfJdDxLsrjs1512DsaJX2bJtz4kLk",
    authDomain: "commet-2895c.firebaseapp.com",
    projectId: "commet-2895c",
    storageBucket: "commet-2895c.appspot.com",
    messagingSenderId: "946264157919",
    appId: "1:946264157919:web:e1a5cbd1faf63007cec36a",
    measurementId: "G-Y28LKRTZ2E",
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };