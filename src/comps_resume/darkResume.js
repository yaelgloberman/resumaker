import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { pdfGenerate } from './pdfDownloadButton';

const DarkResume = ({ Resume}) => {
    const [showButton, setShowButton] = useState(true);

    const handleImageLoad = () => {
        setShowButton(true);
    };
    return (
        <div className="container col-11 bg-dark" id="pdf-container"  >
            <div className="row">
                <div className='text-white w-75 p-4'>
                    {/* Main Content */}
                    <header className="mt-4 text-center">
                        <h1>{`${Resume.firstName} ${Resume.lastName}`}</h1>
                        <p className="lead">{`${Resume.title}`}</p>
                    </header>

                    <section className="education mt-4">
                        <h2>Education</h2>
                        {Resume.educations.map((education, index) => (
                            <div key={index}>
                                <b><h5>{education.name}</h5></b>
                                <p>Degree: {education.degree}</p>
                                <p>Start Date: {education.startDate}</p>
                                <p>End Date: {education.endDate}</p>
                            </div>
                        ))}
                    </section>
                    <section className="experience mt-4">
                        <h2>Work Experience</h2>
                        {Resume.workExperiences.map((experience, index) => (
                            <p key={index}>{experience.jobTitle} - {experience.startDate} to {experience.endDate}</p>
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

        </div>)
}

export default DarkResume