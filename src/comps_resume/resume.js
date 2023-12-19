import React, { useEffect } from 'react';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const Resume = () => {
  const db = getFirestore();
  const userId = "123"; // Replace with the actual user ID

  useEffect(() => {
    const addJobExperience = async () => {
      const userResumeRef = doc(db, "resume", userId);

      const jobExperienceData = {
        jobTitle: "Software Engineer",
        startDate: "2022-01-01",
        endDate: "2022-12-31",
      };
      const jobExperienceData2 = {
        jobTitle: "Data Scientist",
        startDate: "2021-06-01",
        endDate: "2022-01-01",
      };
      const educationData1 = {
        institution: "University of XYZ",
        degree: "Bachelor's in Computer Science",
        startDate: "2018-09-01",
        endDate: "2022-06-30",
      };

      const educationData2 = {
        institution: "ABC College",
        degree: "Master's in Data Science",
        startDate: "2022-09-01",
        endDate: "2024-06-30",
      };

      try {
        // Get the existing resume data
        const existingResumeData = (await getDoc(userResumeRef)).data();

        // Update the "jobExperiences" array with the new job experience
        await setDoc(userResumeRef, {
          jobExperiences: [
            ...(existingResumeData?.jobExperiences || []),
            jobExperienceData,
            jobExperienceData2
          ],
          educations: [
            ...(existingResumeData?.educations || []),
            educationData1,
            educationData2,
          ]
        }, { merge: true });

        console.log('Job experience added successfully!');
      } catch (error) {
        console.error('Error adding job experience:', error);
      }
    };

    addJobExperience();
  }, [db, userId]);

  
  return <div>Resume</div>;
};

export default Resume;
