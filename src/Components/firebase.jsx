// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

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

// Initialize Firebase Services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);