import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  linkWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

// Create user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      const existingUser = await signInWithEmailAndPassword(auth, email, password);
      return existingUser;
    }
    throw error;
  }
};

// Sign in with email and password
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign in with Google and link to existing email/password if needed
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // Check if the user is already registered with email/password
  if (user.email && user.emailVerified) {
    try {
      const credential = EmailAuthProvider.credential(user.email, user.password);
      await linkWithCredential(user, credential); // Link Google account to email/password
    } catch (linkError) {
      // Handle linking error if needed
      console.error("Error linking accounts", linkError);
    }
  }

  // Add user to Firestore or perform other actions
};

// Sign out
export const doSignOut = () => {
  return auth.signOut();
};

// Password reset
export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

// Change password
export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

// Send email verification
export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
