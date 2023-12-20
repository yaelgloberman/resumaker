import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { pdfGenerate } from './pdfDownloadButton';

const ColorfulResume = ({ Resume }) => {
    const [showButton, setShowButton] = useState(true);

    const handleImageLoad = () => {
        setShowButton(true);
    };
    return (
        <div className="container" id="pdf-container" style={{ backgroundColor: "#FCECEC", width: '210mm', height: '297mm' }}>

            <div className="row mx-5">
                <div className="text-white w-75">
                    {/* Main Content */}
                    <header className="mt-4">
                        <h1 className='display-4' style={{ color: 'purple', fontWeight: 'bold' }}>
                            {`${Resume.firstName} ${Resume.lastName}`}
                        </h1>
                        <p className="lead" style={{ color: 'orange', fontWeight: 600, fontSize: '30px' }}>
                            {`${Resume.title}`}
                        </p>

                    </header>

                    <section className="education mt-4  bg-white rounded p-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.80)' }}>
                        <h2 style={{ color: 'pink' }}>Education</h2>
                        {Resume.educations.map((education, index) => (
                            <div key={index}>
                                <b><h5 style={{ color: 'pink' }}>{education.name}</h5></b>
                                <p style={{ color: 'pink' }}>Degree: {education.degree}</p>
                                <p style={{ color: 'pink' }}>Start Date: {education.startDate}</p>
                                <p style={{ color: 'pink' }}>End Date: {education.endDate}</p>
                            </div>
                        ))}
                    </section>
                    <section className="experience mt-4 rounded p-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.80)' }}>
                        <h2 style={{ color: 'pink' }}>Work Experience</h2>
                        {Resume.workExperiences.map((experience, index) => (
                            <p key={index} style={{ color: 'pink' }}>{experience.jobTitle} - {experience.startDate} to {experience.endDate}</p>
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

    )
}

export default ColorfulResume