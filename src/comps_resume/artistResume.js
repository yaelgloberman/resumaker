import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { pdfGenerate } from './pdfDownloadButton';

const ArtistResume = ({ Resume }) => {
    const [showButton, setShowButton] = useState(true);

    const handleImageLoad = () => {
        setShowButton(true);
    };

    return (
        <div>
            {/* Add the font import to the head of your HTML document */}
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@700&family=Rubik+Doodle+Shadow&family=Rubik:ital,wght@0,300;1,700&display=swap');
            </style>

            <div className="container" id="pdf-container" style={{
                background: 'linear-gradient(45deg, #FF6B6B, #8A2387)',
                color: 'white',
                padding: '20px',
            }}>

                <div className="row">
                    <div className='text-white col-8 p-4'>
                        {/* Main Content */}
                        <header className="mt-2 text-center">
                            <h1 style={{
                                color: 'white',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                fontSize: '45px',
                                fontFamily: "'Rubik Doodle Shadow', 'Oleo Script', sans-serif", // Apply the specified fonts
                            }}>
                                {`${Resume.firstName} ${Resume.lastName}`}
                            </h1>
                            <p className="lead" style={{
                                color: '#D3D3D3',
                                fontWeight: 600,
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                fontSize: '18px',
                            }}>{`${Resume.title}`}</p>
                        </header>

                        <section className="education mt-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                            <h2 style={{ color: '#fff' }}>Education</h2>
                            {Resume.educations.map((education, index) => (
                                <div key={index}>
                                    <b><h5 style={{ color: '#FFD700' }}>{education.name}</h5></b>
                                    <p style={{ color: '#D3D3D3' }}>Degree: {education.degree}</p>
                                    <p style={{ color: '#D3D3D3' }}>Start Date: {education.startDate}</p>
                                    <p style={{ color: '#D3D3D3' }}>End Date: {education.endDate}</p>
                                </div>
                            ))}
                        </section>
                        <section className="experience mt-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                            <h2 style={{ color: '#fff' }}>Work Experience</h2>
                            {Resume.workExperiences.map((experience, index) => (
                                <p key={index} style={{ color: '#D3D3D3' }}>{experience.jobTitle} - {experience.startDate} to {experience.endDate}</p>
                            ))}
                        </section>

                       
                    </div>

                    <div className="col-4 mt-3 ">
                        <img
                            src={Resume.imageUrl}
                            alt={`${Resume.firstName} ${Resume.lastName}`}
                            className="img-fluid mt-5 col-9 flex-end"
                            onLoad={handleImageLoad}
                            style={{
                                borderRadius: '50%', // Make the image rounded
                                border: '5px solid #FFD700', // Add golden border
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Add shadow effect
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistResume;
