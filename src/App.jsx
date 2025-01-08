import './App.css';

import React from 'react';
import { PaperUploadForm } from './Components/PaperUploadForm'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Components/firebase'; 

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Research Paper Management</h1>
        {user && <SignOut />}
      </header>

      <main>
        {user ? (
          <>
            <PaperUploadForm />
          </>
        ) : (
          <SignIn />
        )}
      </main>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Please sign in to upload papers.</p>
    </>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => signOut(auth)}>Sign Out</button>
  );
}

export default App;