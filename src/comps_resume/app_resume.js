// src/App.js
import React from 'react';
import ResumeForm from './resumeForm';

const App = () => {
    // You can get the user ID from authentication or any other method
    const userId = 'user123';

    return (
        <div className='container'>
            <h1 className="text-center mt-4 mb-5">Resume Generator</h1>

            <ResumeForm />
   

        </div>
    );
};

export default App;