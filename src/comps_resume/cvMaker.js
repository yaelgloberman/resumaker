import React, { useState } from 'react';
import { Button } from 'reactstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Cv = ({ firstName, lastName, imageUrl, educations, workExperiences }) => {
  const [showButton, setShowButton] = useState(true);

  const pdfGenerate = () => {
    const pdfContainer = document.getElementById('pdf-container');

    html2canvas(pdfContainer).then((canvas) => {
      setShowButton(false); // Hide the button before generating the PDF

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('portrait', 'px', 'a4');

      // Calculate the width and height of the PDF based on A4 dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${firstName}_${lastName}_CV.pdf`);
    });
  };

  const handleImageLoad = () => {
    // Once the image is loaded, show the button
    setShowButton(true);
  };

  return (
    <div className="container col-8 bg-dark" id="pdf-container" style={{ backgroundColor: '#E6E6FA', minHeight: '1200px' }}>
      <div className="row">
        <div className='text-white w-75 p-4'>
          {/* Main Content */}
          <header className="mt-4 text-center">
            <h1>{`${firstName} ${lastName}`}</h1>
            <p className="lead">Web Developer</p>
          </header>

          <section className="education mt-4">
            <h2>Education</h2>
            {educations.map((education, index) => (
              <div key={index}>
                <p>{education.name}</p>
                <p>Degree: {education.degree}</p>
                <p>Start Date: {education.startDate}</p>
                <p>End Date: {education.endDate}</p>
              </div>
            ))}
          </section>
          <section className="experience mt-4">
            <h2>Work Experience</h2>
            {workExperiences.map((experience, index) => (
              <p key={index}>{experience.jobTitle} - {experience.startDate} to {experience.endDate}</p>
            ))}
          </section>
        </div>

        <div className="col-6 w-25">
          <img
            src={imageUrl} // Use the provided image URL
            alt={`${firstName} ${lastName}`}
            className="img-fluid mt-5 flex-end"
            onLoad={handleImageLoad} // Add onload event to trigger when the image is loaded
          />
        </div>
      </div>

        <Button onClick={pdfGenerate} className='btn btn-success'>
          Download PDF
        </Button>
    </div>
  );
};

export default Cv;
