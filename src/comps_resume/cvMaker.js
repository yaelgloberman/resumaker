import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { pdfGenerate } from './pdfDownloadButton';
import DarkStyle from './darkResume';
import ColorfulStyle from './colorfulResume';
import ClassicStyle from './classicResume';
import ArtistStyle from './artistResume';
import ModernStyle from './modernResume'; // Added import for ModernStyle

const Cv = ({ firstName, lastName, imageUrl, educations, workExperiences, title, cvStyle }) => {
    const [showButton, setShowButton] = useState(true);

    const handleImageLoad = () => {
        setShowButton(true);
    };
    const Resume = {
        firstName,
        lastName,
        imageUrl,
        workExperiences,
        educations,
        title
    }
    return (
        <div id="pdf-container">
            {cvStyle === 'Dark' ? (
                <DarkStyle
                    Resume={Resume}
                />
            ) : cvStyle === 'Classic' ? (
                <ClassicStyle
                    Resume={Resume}
                />
            ) : cvStyle === 'Modern' ? (
                <ModernStyle // Fixed to use ModernStyle instead of DarkStyle
                Resume={Resume}
                />
            ) : cvStyle === 'Artist' ? (
                <ArtistStyle
                Resume={Resume}
                />
            ) : cvStyle === 'Colorful' ? (
                <ColorfulStyle
                Resume={Resume}
                />
            ) : null}
        </div>
    );
};

export default Cv;
