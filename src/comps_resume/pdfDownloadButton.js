// src/components/PdfDownloadButton.js
import React, { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { db } from '../firebase/config';

const PdfDownloadButton = ({ userId }) => {
    const [resumeContent, setResumeContent] = useState('');
    useEffect(() => {
        const fetchResumeDetails = async () => {
            try {
                const resumeSnapshot =  await db.collection('resumes').where('userId', '==', userId).get();

                if (!resumeSnapshot.empty) {
                    const resumeData = resumeSnapshot.docs[0].data();
                    // Set resume content based on fetched data
                    setResumeContent(<div>${resumeData.name}</div>); // Add other fields
                }
            } catch (error) {
                console.error('Error fetching resume details:', error);
            }
        };

        fetchResumeDetails();
    }, [userId]);

    const handleDownload = () => {
        html2pdf().from(resumeContent).save();
    };

    return (
        <div className='container'>
            <button className='btn btn-success my-2 text-center ' onClick={handleDownload}>Download PDF</button>
        </div>
    );
};

export default PdfDownloadButton;