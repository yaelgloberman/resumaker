import { Route } from "react-router-dom";
import React, { useRef } from 'react'
import { useLogin } from './hooks/useLogin'
import Resume from "./comps_resume/resume";
export default function Login() {
  const {error, login} = useLogin()
  const mailRef = useRef();
  const passRef = useRef();


  const onSub = (e) => {
    e.preventDefault();
    login(mailRef.current.value, passRef.current.value)
    console.log("login");
    {<Route path="/resume" element={<Resume />} />}     
  }
  return (
    <div className='container'>
      <form onSubmit={onSub}>
        <label>Email:</label>
        <input ref={mailRef} type="email" />
        <br/>
        <label>Password:</label>
        <input ref={passRef} type="password" />
        <h3 className='text-danger'>{error}</h3>
        <button>Log in</button>
      </form>
    </div>
  )
  }