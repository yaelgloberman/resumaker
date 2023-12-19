import React, { useState } from 'react';
import CvMaker from './cvMaker'
const ResumeForm = () => {
    const [allResumes, setAllResumes] = useState([]);
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

        // Create a new resume object
        const newResume = {
            firstName,
            lastName,
            imageUrl,
            workExperiences,
            educations,
        };

        // Add the new resume to the array of all resumes
        setAllResumes([...allResumes, newResume]);

        // Log the submitted data and set the state to indicate that the form has been submitted
        console.log('Submitted data:', newResume);
        setIsSubmitted(true);
    };

    return (
        <div className=" container d-flex justify-content-start mt-4">
            <div className='col-6 bg-danger'>
                {isSubmitted ? (
                    <CvMaker
                        firstName={firstName}
                        lastName={lastName}
                        imageUrl={imageUrl}
                        workExperiences={workExperiences}
                        educations={educations}
                    />
                ) : (
                    <form onSubmit={handleSubmit} className='col-11 px-5 py-3'>
                        <label><b>Info:</b></label>
                        <input type="text" className='form-control my-2' placeholder='first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" className='form-control my-2' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <input type="text" className='form-control my-2' placeholder='Profile Picture' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                        <div className="work-experience  mt-3">
                            <label><b>Work Experience:</b></label>
                            {workExperiences.map((experience, index) => (
                                <div key={index}>
                                    <input
                                        type="text"
                                        className='form-control my-2'
                                        placeholder='Job Title'
                                        value={experience.jobTitle}
                                        onChange={(e) => handleWorkExperienceChange(index, 'jobTitle', e.target.value)}
                                    />

                                    <div className="row my-2">
                                        <div className="row">
                                            <div className="col-2 mt-1">
                                                <label>Start Date:</label>
                                            </div>
                                            <div className="col-4">
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={experience.startDate}
                                                    onChange={(e) => handleWorkExperienceChange(index, 'startDate', e.target.value)}
                                                />
                                            </div>
                                            <div className="col-2 mt-1 ">
                                                <label>End Date:</label>
                                            </div>
                                            <div className="col-4">
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={experience.endDate}
                                                    onChange={(e) => handleWorkExperienceChange(index, 'endDate', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                            <button type="button" className=' my-2 btn btn-outline-primary' onClick={handleAddWorkExperience}>Add Work Experience</button>
                        </div>

                        <div className="education mt-3">
                            <label><b>Education:</b></label>
                            {educations.map((education, index) => (
                                <div key={index}>
                                    <input
                                        placeholder='School'
                                        type="text"
                                        className='form-control my-2'
                                        value={education.name}
                                        onChange={(e) => handleEducationChange(index, 'name', e.target.value)}
                                    />
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
                                    <div className="row my-3">
                                        <div className="row">
                                            <div className="col-2 mt-1">
                                                <label>Start Date:</label>
                                            </div>
                                            <div className="col-4">
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={education.startDate}
                                                    onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                                                />
                                            </div>
                                            <div className="col-2 mt-1 ">
                                                <label>End Date:</label>
                                            </div>
                                            <div className="col-4 ">
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={education.endDate}
                                                    onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))}
                            <button type="button" className='my-2 btn btn-outline-primary' onClick={handleAddEducation}>Add Education</button>

                        </div>
                        <button type="submit" className='btn btn-success mt-3 mx-auto d-block'>Submit</button>


                    </form>
                )}
            </div>
            <div className='bg-dark col-6'>

            </div>
        </div>
    );
};

export default ResumeForm;

