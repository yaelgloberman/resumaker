import React, { useState } from 'react';
import CvMaker from './cvMaker'
const YourFormComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [workExperiences, setWorkExperiences] = useState([{ jobTitle: '', startDate: '', endDate: '' }]);
    const [educations, setEducations] = useState([{ name: '', startDate: '', endDate: '', degree: '' }]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAddWorkExperience = () => {
        setWorkExperiences([...workExperiences, { jobTitle: '', startDate: '', endDate: '' }]);
    };

    const handleAddEducation = () => {
        setEducations([...educations, { name: '', startDate: '', endDate: '', degree: '' }]);
    };

    const handleWorkExperienceChange = (index, field, value) => {
        const updatedWorkExperiences = [...workExperiences];
        updatedWorkExperiences[index][field] = value;
        setWorkExperiences(updatedWorkExperiences);
    };

    const handleEducationChange = (index, field, value) => {
        const updatedEducations = [...educations];
        updatedEducations[index][field] = value;
        setEducations(updatedEducations);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here using the captured data
        console.log('Submitted data:', { firstName, lastName, imageUrl, workExperiences, educations });
        
        // Set the state to indicate that the form has been submitted
        setIsSubmitted(true);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center ">
            {isSubmitted ? (
                <CvMaker
                    firstName={firstName}
                    lastName={lastName}
                    imageUrl={imageUrl}
                    workExperiences={workExperiences}
                    educations={educations}
                />
            ) : (
                 <form onSubmit={handleSubmit} className='col-md-6 p-2'>
                <label><b>First Name</b></label>
                <input type="text" className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label><b>Last Name</b></label>
                <input type="text" className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <label><b>Profile Picture</b></label>
                <input type="text" className='form-control' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

                <div className="work-experience">
                    <label><b>Work Experience:</b></label>
                    {workExperiences.map((experience, index) => (
                        <div key={index}>
                            <label>Job Title:</label>
                            <input
                                type="text"
                                className='form-control'
                                value={experience.jobTitle}
                                onChange={(e) => handleWorkExperienceChange(index, 'jobTitle', e.target.value)}
                            />
                            <div className="row">
                                <div className="col-6">
                                    <label>Start Date:</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={experience.startDate}
                                        onChange={(e) => handleWorkExperienceChange(index, 'startDate', e.target.value)}
                                    />
                                </div>
                                <div className="col-6">
                                    <label>End Date:</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={experience.endDate}
                                        onChange={(e) => handleWorkExperienceChange(index, 'endDate', e.target.value)}
                                    />
                                </div>
                            </div>


                        </div>
                    ))}
                    <button type="button" className=' my-2 btn btn-outline-primary' onClick={handleAddWorkExperience}>Add Work Experience</button>
                </div>

                <div className="education">
                    <label><b>Education:</b></label>
                    {educations.map((education, index) => (
                        <div key={index}>
                            <label>School:</label>
                            <input
                                type="text"
                                className='form-control'
                                value={education.name}
                                onChange={(e) => handleEducationChange(index, 'name', e.target.value)}
                            />
                            <label>Degree:</label>
                            <select
                                className="form-control"
                                value={education.degree}
                                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                            >
                                <option value="">Select Degree</option>
                                <option value="High School Diploma">High School Diploma</option>
                                <option value="Bachelor's Degree">Bachelor's Degree</option>
                                <option value="Master's Degree">Master's Degree</option>
                                {/* Add more degree options as needed */}
                            </select>
                            <div className="row">
                                <div className="col-6">
                                    <label>Start Date:</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={education.startDate}
                                        onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                                    />
                                </div>
                                <div className="col-6">
                                    <label>End Date:</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={education.endDate}
                                        onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                    ))}
                    <button type="button" className='my-2 btn btn-outline-primary' onClick={handleAddEducation}>Add Education</button>
                </div>

               
                    <button type="submit" className='btn btn-success mt-3'>Submit</button>
                </form>
            )}
        </div>
    );
};

export default YourFormComponent;

