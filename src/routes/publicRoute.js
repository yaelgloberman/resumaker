import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/authContext';

const PublicRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
  
    return isAuthenticated ? <Navigate to="/" /> : <Routes><Route path="/*" element={element} /></Routes>;
};

export default PublicRoute;