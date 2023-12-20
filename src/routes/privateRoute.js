import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/authContext';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Routes><Route path="/*" element={element} /></Routes> : <Navigate to="/" />;
};

export default PrivateRoute;