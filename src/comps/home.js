import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from '../signUp'
import Login from '../login';


export default function Home() {
  return (
    <div className='container text-center'>Welcome to resumaker
      <Login />    
      <SignUp />    
      </div>

  )
}
