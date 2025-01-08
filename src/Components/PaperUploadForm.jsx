import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { auth, firestore } from './firebase'; // Use initialized Firebase

export function PaperUploadForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      alert('You must be signed in to upload a paper.');
      return;
    }

    if (!title || !description || !pdfUrl) {
      alert('All fields are required!');
      return;
    }

    try {
      await addDoc(collection(firestore, 'papers'), {
        title,
        description,
        pdfUrl,
        createdAt: new Date(),
        uploadedBy: {
          uid: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
        },
      });

      setSuccessMessage('Paper uploaded successfully!');
      setTitle('');
      setDescription('');
      setPdfUrl('');
    } catch (error) {
      console.error('Error uploading paper: ', error);
      alert('Failed to upload paper. Please try again.');
    }
  };

  return (
    <div>
      <h2>Upload a New Research Paper</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>PDF URL:</label>
          <input
            type="url"
            value={pdfUrl}
            onChange={(e) => setPdfUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Upload Paper</button>
      </form>
    </div>
  );
}