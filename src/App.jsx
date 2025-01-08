import React from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Components/firebase'; // Import the auth from firebase.js
import './App.css';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Research Papers Hub</h1>
        <SignOut />
      </header>
      <section>
        {user ? <h2>Welcome, {user.displayName}</h2> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Signed in successfully!");
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return (
    auth.currentUser && (
      <button onClick={() => signOut(auth)}>Sign Out</button>
    )
  );
}

export default App;