import React, { useEffect, useState } from 'react';
import Firebase from '../firebase/firebase';
import SmallResume from './smallCv';

export default function FireLiveToys() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const firebase = new Firebase();

  useEffect(() => {
    // Fetch resumes when the component mounts
    const fetchResumes = async () => {
      try {
        const resumesData = await firebase.getAllResumes();
        setResumes(resumesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resumes:', error);
        setLoading(false);
      }
    };

    fetchResumes();
  }, [firebase]);

  return (
    <div className='container'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        resumes.map((resume) => (
          <SmallResume key={resume.id} resume={resume} />
        ))
      )}
    </div>
  );
}
