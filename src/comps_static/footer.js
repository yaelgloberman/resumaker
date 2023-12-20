// Footer.js
import React from 'react';
import { useAuth } from '../hooks/authContext';

function Footer() {
  const { isAuthenticated, logout, userId } = useAuth();

  const handleLogout = async () => {
    await logout();
    // Additional logic after logout if needed
  };

  return (
    <div className='container'>
      {isAuthenticated && (
        <button className='btn btn-danger' onClick={handleLogout}>
          Logout {userId}
        </button>
      )}
    </div>
  );
}

export default Footer;
