// SmallResume.js
import React from 'react';

const SmallResume = ({ resume }) => {
  const { id, firstName, lastName, imageUrl, educationArr, workExperienceArr, title } = resume;

  return (
    <div key={id} className="container col-10 bg-dark">
      <div className="row">
        <div className='text-white w-75 p-4'>
          <header className="mt-4 text-center">
            <h1>{`${firstName} ${lastName}`}</h1>
            <p className="lead">{`${title}`}</p>
          </header>

          <section className="education mt-4">
            <h2>Education</h2>
            {Array.isArray(educationArr) && educationArr.length > 0 ? (
              educationArr.map((education, index) => (
                <div key={index}>
                  <b><h5>{education.name}</h5></b>
                  <p>Degree: {education.degree}</p>
                  <p>Start Date: {education.startDate}</p>
                  <p>End Date: {education.endDate}</p>
                </div>
              ))
            ) : (
              <p>No education data</p>
            )}
          </section>

          <section className="experience mt-4">
            <h2>Work Experience</h2>
            {Array.isArray(workExperienceArr) && workExperienceArr.length > 0 ? (
              workExperienceArr.map((experience, index) => (
                <p key={index}>{experience.jobTitle} - {experience.startDate} to {experience.endDate}</p>
              ))
            ) : (
              <p>No work experience data</p>
            )}
          </section>
        </div>

        <div className="col-6 w-25 mt-5">
          <img
            src={imageUrl}
            alt={`${firstName} ${lastName}`}
            className="img-fluid mt-5 flex-end"
          />
        </div>
      </div>
    </div>
  );
};

export default SmallResume;
