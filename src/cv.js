import React from 'react';

const CV = ({ firstName, lastName, imageUrl, email, phone, linkedin, education, workExperiences, skills }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          {/* Main Content */}
          <header className="text-center">
            <h1>{`${firstName} ${lastName}`}</h1>
            <p className="lead">Web Developer</p>
          </header>

          <section className="personal-info mt-4">
            <h2>Personal Information</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>LinkedIn: {linkedin}</p>
          </section>

          <section className="education mt-4">
            <h2>Education</h2>
            <p>{education}</p>
          </section>

          <section className="experience mt-4">
            <h2>Work Experience</h2>
            {workExperiences.map((experience, index) => (
              <p key={index}>{experience.jobTitle} - {experience.startDate} to {experience.endDate}</p>
            ))}
          </section>

          <section className="skills mt-4">
            <h2>Skills</h2>
            <ul className="list-unstyled">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="col-md-4">
          {/* Image Section */}
          <img
            src={imageUrl} // Use the provided image URL
            alt={`${firstName} ${lastName}`}
            className="img-fluid rounded-circle mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default CV;
