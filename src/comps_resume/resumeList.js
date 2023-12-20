import React, { useEffect, useState } from 'react';
import Firebase from '../firebase/firebase';
// import SmallResume from './smallCv';
import CvMaker from './cvMaker'
import { useAuth } from '../hooks/authContext';

export default function FireLiveToys() {
  const { userId, role } = useAuth();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const firebase = new Firebase();

  useEffect(() => {
    // Fetch resumes when the component mounts
    const fetchResumes = async () => {
      try {
        let resumesData=null;
        if(role=="admin"){
          resumesData = await firebase.getAllResumes();
        }
        else{
          resumesData = await firebase.getAllResumesOfUser(userId);
        }
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
          <div >
          <CvMaker
              firstName={resume.firstName}
              lastName={resume.lastName}
              imageUrl={resume.imageUrl}
              workExperiences={resume.workExperiences}
              educations={resume.educations}
              title={resume.title}
              cvStyle={resume.cvStyle}
          />
      </div>
        ))
      )}
    </div>
  );
}
