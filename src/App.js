import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Form from "./comps/form";
import Home from "./comps/home";
import Header from "./comps_static/header";
import Footer from "./comps_static/footer";
import './App.css';

import AppResume from "./comps_resume/app_resume";
import ResumeForm from "./comps_resume/resumeForm";
import ResumeList from "./comps_resume/resumeList"
import LoginSignup from "./login_signup"

import PublicRoute from "./routes/publicRoute";
import PrivateRoute from "./routes/privateRoute";
import { AuthProvider } from "./hooks/authContext";






function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/loginSignup" element={<PublicRoute element={<LoginSignup />} />} />
          <Route path="/form" element={<PrivateRoute element={<Form />} />} />
          <Route path="/appResume" element={<PrivateRoute element={<AppResume />} />} />
          <Route path="/resumeForm" element={<PrivateRoute element={<ResumeForm />} />} />
          <Route path="/resumeList" element={<PrivateRoute element={<ResumeList />} />} />
          {/* Add your 404 route here if needed */}
          <Route path="*" element={<h2>Page 404, not found!</h2>} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
