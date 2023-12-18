import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container-fluid bg-dark text-white'>
      <div className="container">
        <div className="row align-items-center">
          <div className='col-auto'>
            <h2>My logo</h2>
          </div>
          <nav className="nav col-auto">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/employee">Employee</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/todos">Todo</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/resumeForm">Resume form</Link>
              </li>
              <li>
                <Link to="/cv">CV</Link>
              </li>
              <li>
                <Link to="/signUp">sign up</Link>
              </li>
              <li>
                <Link to="/login">log in</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
