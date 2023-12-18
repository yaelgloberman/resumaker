import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import Form from "./comps/form";
import Home from "./comps/home";
import Header from "./comps_static/header";
import './App.css';

import  AppResume from "./comps_resume/app_resume";
import ResumeForm from "./comps_resume/resumeForm";
import Users from "./comps_users/app_users"
import CV from "./cv"
import Login_Signup from "./login_signup"






function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
   
        <Route path="/form" element={<Form />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/appResume" element={<AppResume />} /> 
        <Route path="/resumeForm" element={<ResumeForm />} /> 
        <Route path="/loginSignup" element={<Login_Signup />} /> 

        <Route path="*" element={<h2>Page 404, not found!</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
