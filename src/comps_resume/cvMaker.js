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

    return (
        <div  id="pdf-container">
            {cvStyle === 'Dark' ? (
                <DarkStyle
                    firstName={firstName}
                    lastName={lastName}
                    imageUrl={imageUrl}
                    workExperiences={workExperiences}
                    educations={educations}
                    title={title}
                    cvStyle={cvStyle}
                />
            ) : cvStyle === 'Classic' ? (
                <ClassicStyle
                    firstName={firstName}
                    lastName={lastName}
                    imageUrl={imageUrl}
                    workExperiences={workExperiences}
                    educations={educations}
                    title={title}
                    cvStyle={cvStyle}
                />
            ) : cvStyle === 'Modern' ? (
                <ModernStyle // Fixed to use ModernStyle instead of DarkStyle
                    firstName={firstName}
                    lastName={lastName}
                    imageUrl={imageUrl}
                    workExperiences={workExperiences}
                    educations={educations}
                    title={title}
                    cvStyle={cvStyle}
                />
            ) : cvStyle === 'Artist' ? (
                <ArtistStyle
                    firstName={firstName}
                    lastName={lastName}
                    imageUrl={imageUrl}
                    workExperiences={workExperiences}
                    educations={educations}
                    title={title}
                    cvStyle={cvStyle}
                />
            ) : cvStyle === 'Colorful' ? (
                <ColorfulStyle
                    firstName={firstName}
                    lastName={lastName}
                    imageUrl={imageUrl}
                    workExperiences={workExperiences}
                    educations={educations}
                    title={title}
                    cvStyle={cvStyle}
                />
            ) : null}
        </div>
    );
};

export default Cv;
