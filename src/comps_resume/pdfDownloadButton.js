import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const pdfGenerate = (firstName, lastName, educations, workExperiences, title, cvStyle) => {
    const pdfContainer = document.getElementById('pdf-container');

    html2canvas(pdfContainer).then((canvas) => {

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('portrait', 'px', 'a4');

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${firstName}_${lastName}_CV.pdf`);
    });
};