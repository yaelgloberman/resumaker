import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { pdfGenerate } from './pdfDownloadButton';

const ClassicResume = ({ Resume }) => {
    const [showButton, setShowButton] = useState(true);

    const handleImageLoad = () => {
        setShowButton(true);
    };

    return (
        <div className="container" id="pdf-container" style={{
            background: 'rgb(210, 246, 255)',
            background: 'linear-gradient(29deg, rgba(210, 246, 255, 1) 16%, rgba(56, 182, 237, 1) 35%, rgba(54, 75, 255, 1) 100%)',
            padding: '20px',
        }}>

            <div className="row">
                <div className='text-white col-8 p-4'>
                    {/* Main Content */}
                    <header className="mt-2 text-center">
                        <h1 style={{ color: 'white', fontWeight: 600, textShadow: '2px 2px 4px rgba(56, 182, 237, 1)', fontSize: '60px' }}>
                            {`${Resume.firstName} ${Resume.lastName}`}
                        </h1>
                        <p className="lead" style={{ color: '#D3D3D3', fontWeight: 600, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '18px' }}>{`${Resume.title}`}</p>
                    </header>

                    <section className="education mt-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                        <h2 style={{ color: '#fff' }}>Education</h2>
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
                            borderRadius: '10%',
                            border: '5px solid silver', // Add white border
                            boxShadow: '0 0 10px rgba(56, 182, 237, 1)', // Add shiny effect with a white shadow
                        }}
                    />

                </div>
            </div>
        </div>
    );
};

export default ClassicResume;
