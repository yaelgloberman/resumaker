import React from 'react'
import useLogout from '../hooks/useLogout';

function Footer() {
    const { error, logout } = useLogout();

    const handleLogout = async () => {
      await logout();
      // Additional logic after logout if needed
    };
  
    return (
      <div className='container'>
        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
      </div>
    );
}

export default Footer