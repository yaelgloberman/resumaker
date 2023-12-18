// src/App.js
import React from 'react';
import { Link } from 'react-router-dom'

const App = () => {
    // You can get the user ID from authentication or any other method

    return (
        <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <h1 className="text-center mt-4 mb-5">Resume Generator</h1>
            <div className="d-flex justify-content-between">
              <div  className='border mx-2 p-5'>
                <h2>View all your resumes</h2>
                <Link to="/resumes" className="btn btn-primary">View</Link>
              </div>
              <div className='border mx-2 p-5'>
                <h2>Make a new resume</h2>
                <Link to="/resumeForm" className="btn btn-success text-senter">Start</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default App;