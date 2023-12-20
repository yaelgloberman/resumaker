import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { pdfGenerate } from './pdfDownloadButton';

const DarkResume = ({ Resume }) => {
    const [showButton, setShowButton] = useState(true);

    const handleImageLoad = () => {
        setShowButton(true);
    };

    return (
        <div className="container" id="pdf-container" style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}>

            <div className="row mx-5">
                <div className="text-white w-75">
                    {/* Main Content */}
                    <header className="mt-4">
                        <h1 className='display-4' style={{ color: '#9B59B6', fontWeight: 'bold' }}>
                            {`${Resume.firstName} ${Resume.lastName}`}
                        </h1>
                        <p className="lead" style={{ color: '#E67E22', fontWeight: 600, fontSize: '25px' }}>
                            {`${Resume.title}`}
                        </p>
                    </header>

                    <section className="education mt-4 rounded p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                        <h2 style={{ color: '#263cfc' }}>Education</h2>
                        {Resume.educations.map((education, index) => (
                            <div key={index}>
                                <b><h5 style={{ color: '#3498DB' }}>{education.name}</h5></b>
                                <p style={{ color: '#3498DB' }}>Degree: {education.degree}</p>
                                <p style={{ color: '#3498DB' }}>Start Date: {education.startDate}</p>
                                <p style={{ color: '#3498DB' }}>End Date: {education.endDate}</p>
                            </div>
                        ))}
                    </section>
                    <section className="experience my-4 rounded p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                        <h2 style={{ color: '#263cfc' }}>Work Experience</h2>
                        {Resume.workExperiences.map((experience, index) => (
                            <p key={index} style={{ color: '#3498DB' }}>{experience.jobTitle} - {experience.startDate} to {experience.endDate}</p>
                        ))}
                    </section>
                </div>

                <div className="col-6 w-25">
                    <img
                        src={Resume.imageUrl}
                        alt={`${Resume.firstName} ${Resume.lastName}`}
                        className="img-fluid mt-5 flex-end rounded"
                        onLoad={handleImageLoad}
                    />
                </div>
            </div>
        </div>
    );
}

export default DarkResume;
