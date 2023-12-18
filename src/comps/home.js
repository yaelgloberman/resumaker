import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Login_Signup from '../login_signup'

export default function Home() {
  return (

    <div className='container'>
      <div className='row justify-content-center'>
          <h1 className='text-center display-1 my-5'>Welcome to resumaker</h1>
        <div className='col-md-5'>
          <div className="d-flex text-center border ">
            <Login_Signup />
          </div>
        </div>
      </div>
    </div>

  )
}
