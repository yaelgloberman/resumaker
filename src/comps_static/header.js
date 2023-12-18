import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container-fluid bg-dark text-white'>
      <div className="container">
        <div className="row align-items-center">
          <div className='col-auto'>
            <h2>Resumaker</h2>
          </div>
          <nav className="nav col-auto">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/resumeForm">Resume form</Link>
              </li>
              <li>
                <Link to="/cv">CV</Link>
              </li>
              <li>
                <Link to="/resumeList">Resume list</Link>
              </li>
              <li>
                <Link to="/loginSignup">login signup</Link>
              </li>
              <li>
                <Link to="/resume">Resume1</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
