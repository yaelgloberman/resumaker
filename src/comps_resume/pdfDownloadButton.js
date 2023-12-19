import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const pdfGenerate = (firstName, lastName, educations, workExperiences, title) => {
    const pdfContainer = document.getElementById('pdf-container');
    const pdfHeight = 297; // A4 height in mm

    // Set A4 dimensions
    const pdfWidth = 210; // A4 width in mm

    html2canvas(pdfContainer, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('portrait', 'mm', 'a4');

        // Calculate the aspect ratio to maintain the original size on the A4 page
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add the image to the PDF, positioning it at the top-left corner
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        // Set font size and style for the text content
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'normal');

        // Position for text content
        const textX = 10;
        const textY = imgHeight + 20;

        // Add the text content to the PDF
        pdf.text(textX, textY, `${firstName} ${lastName}`, { align: 'left' });
        pdf.text(textX, textY + 10, `${title}`, { align: 'left' });

        // Add education section
        pdf.text(textX, textY + 30, 'Education', { align: 'left' });
        educations.forEach((education, index) => {
            pdf.text(textX, textY + 40 + index * 30, `${education.name} - ${education.degree}`, { align: 'left' });
        });

        // Add work experience section
        pdf.text(textX, textY + 100, 'Work Experience', { align: 'left' });
        workExperiences.forEach((experience, index) => {
            pdf.text(textX, textY + 110 + index * 20, `${experience.jobTitle} - ${experience.startDate} to ${experience.endDate}`, { align: 'left' });
        });

        // Save the PDF
        pdf.save(`${firstName}_${lastName}_CV.pdf`);
    });
};
