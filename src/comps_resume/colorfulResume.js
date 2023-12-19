import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { pdfGenerate } from './pdfDownloadButton';

const DarkResume = ({ Resume }) => {
    const [showButton, setShowButton] = useState(true);

    const handleImageLoad = () => {
        setShowButton(true);
    };
    return (
        <div className="container"  id="pdf-container" >

            <div className="row mx-5">
                <div className="text-white w-75">
                    {/* Main Content */}
                    <header className="mt-4 text-center">
                        <h1 style={{ color: 'purple' }}>
                            {`${Resume.firstName} ${Resume.lastName}`}
                        </h1>
                        <p className="lead" style={{ color: 'orange' }}>{`${Resume.title}`}</p>
                    </header>

                    <section className="education mt-4">
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
                    <section className="experience mt-4">
                        <h2 style={{ color: 'pink' }}>Work Experience</h2>
                        {Resume.workExperiences.map((experience, index) => (
                            <p key={index} style={{ color: 'pink' }}>{experience.jobTitle} - {experience.startDate} to {experience.endDate}</p>
                        ))}
                    </section>
                </div>

                <div className="col-6 w-25 mt-5">
                    <img
                        src={Resume.imageUrl} // Use the provided image URL
                        alt={`${Resume.firstName} ${Resume.lastName}`}
                        className="img-fluid mt-5 flex-end"
                        onLoad={handleImageLoad} // Add onload event to trigger when the image is loaded
                    />
                </div>
            </div>
        </div>

    )
}

export default DarkResume