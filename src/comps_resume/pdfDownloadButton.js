import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const pdfGenerate = (firstName, lastName, educations, workExperiences, title) => {
    const pdfContainer = document.getElementById('pdf-container');

    // Set A4 dimensions
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = 297; // A4 height in mm

    html2canvas(pdfContainer, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('portrait', 'mm', 'a4');

        // Calculate the aspect ratio to maintain the original size on the A4 page
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add the image to the PDF, positioning it at the top-left corner
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        // Save the PDF
        pdf.save(`${firstName}_${lastName}_CV.pdf`);
    });
};
