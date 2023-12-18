import React, { useRef } from 'react';
import { useLogin } from './hooks/useLogin';
import { useSignup } from './hooks/useSignUp';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const mailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const { errorL, login } = useLogin();
  const { errorS, SignUp } = useSignup();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(mailRef.current.value, passRef.current.value);
      if (user && user.existsInDatabase) {
        console.log("user.existsInDatabase",user.existsInDatabase);
        console.log("user.user",user);
        alert("Login successful");
        navigate('/appResume'); // Redirect to /appResume after successful login and user exists in the database
      } else {
        alert("Login failed. User not found in the database.");
      }
    } catch (errorL) {
      console.error("Login failed", errorL);
    }
  };





  const onSignup = async (e) => {
    e.preventDefault();
    try {
      await SignUp(mailRef.current.value, passRef.current.value);
      alert("Signup successful");
      navigate('/resumeForm'); // Redirect to /resumeForm after successful signup
    } catch (errorS) {
      console.error("Signup failed", errorS);

      // Check if the error indicates that the email is already in use
      if (errorS.message.includes('email-already-in-use')) {
        alert("Signup failed. Email is already in use.");
        // You may want to handle this case differently, such as displaying a message to the user or redirecting them to a login page.
      } else {
        // Handle other signup errors
        alert("Signup failed. An error occurred.");
      }
    }
  };

  return (
    <div className='container m-5'>
      <form>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label ">Email:</label>
          <div className="col-sm-10">
            <input className='form-control' ref={mailRef} type="email" id="email" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label ps-1">Password:</label>
          <div className="col-sm-10">
            <input className='form-control' ref={passRef} type="password" id="password" />
          </div>
        </div>
        <h3 className='text-danger'>{errorL || errorS}</h3>
        <div className="d-flex justify-content-center mt-5 ">
          <button type="submit" className='btn btn-success col-4 mx-2' onClick={onLogin}>Log in</button>
          <button type="submit" className='btn btn-primary col-4 mx-2' onClick={onSignup}>Sign up</button>
        </div>

      </form>
    </div>
  );

}






