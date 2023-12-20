import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // <-- Add this line
import { useAuth } from '../hooks/authContext';

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    // Redirect to the home page after logout
    navigate('/');
    // Additional logic after logout if needed
  };

  return (
    <header className='container-fluid bg-dark text-white'>
      <div className="container">
        <div className="row align-items-center">
          <div className='col-auto'>
            <h2>Resumaker</h2>
          </div>
          <nav className="nav col-auto ">
          <ul className='justify-content-space'>

              <li className='mt-2'>
                <Link to="/">Home</Link>
              </li>

              <li className='mt-2'>
              <Link to="/resumeForm">Resume form</Link>
            </li>
            <li className='mt-2'>
              <Link to="/resumeList">Resume list</Link>
            </li>

            <li>
              <div className='container'>
                {isAuthenticated && (
                  <button className='btn btn-danger' onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </div>
            </li>

          </ul>
        </nav>
      </div>
    </div>
    </header >
  );
}
