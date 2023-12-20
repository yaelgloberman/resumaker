import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { pdfGenerate } from './pdfDownloadButton';

const ModernResume = ({ Resume }) => {
    const [showButton, setShowButton] = useState(true);

    const handleImageLoad = () => {
        setShowButton(true);
    };

    return (
        <div>
            {/* Add the font import to the head of your HTML document */}
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@700&family=Rubik:ital,wght@0,300;1,700&display=swap');
            </style>

            <div className="container" id="pdf-container" style={{
                background: 'linear-gradient(to bottom, #19514F, #1E7E34)',
                color: '#D3D3D3',
                padding: '20px',
                fontFamily: 'Rubik, sans-serif',
                width: '210mm', height: '297mm'
            }}>
                <div className="row">
                    <div className='text-white col-8 p-4'>
                        {/* Main Content */}
                        <header className="mt-2 text-center">
                            <h1 style={{ color: '#fff', fontWeight: 600, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '50px' }}>
                                {`${Resume.firstName} ${Resume.lastName}`}
                            </h1>
                            <p className="lead" style={{ color: '#D3D3D3', fontWeight: 600, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{`${Resume.title}`}</p>
                        </header>

                        <section className="education mt-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                            <h2 style={{ color: '#D3D3D3' }}>Education</h2>
                            {Resume.educations.map((education, index) => (
                                <div key={index}>
                                    <b><h5 style={{ color: '#1E7E34' }}>{education.name}</h5></b>
                                    <p style={{ color: '#D3D3D3' }}>Degree: {education.degree}</p>
                                    <p style={{ color: '#D3D3D3' }}>Start Date: {education.startDate}</p>
                                    <p style={{ color: '#D3D3D3' }}>End Date: {education.endDate}</p>
                                </div>
                            ))}
                        </section>
                        <section className="experience mt-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                            <h2 style={{ color: '#D3D3D3' }}>Work Experience</h2>
                            {Resume.workExperiences.map((experience, index) => (
                                <p key={index} style={{ color: '#D3D3D3' }}>{experience.jobTitle} - {experience.startDate} to {experience.endDate}</p>
                            ))}
                        </section>

                    </div>

                    <div className="col-4 mt-3 ">
                        <img
                            src={Resume.imageUrl} // Use the provided image URL
                            alt={`${Resume.firstName} ${Resume.lastName}`}
                            className="img-fluid mt-5 col-9 flex-end"
                            onLoad={handleImageLoad} // Add onload event to trigger when the image is loaded
                            style={{ borderRadius: '50%' }} // Make the image rounded
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernResume;
