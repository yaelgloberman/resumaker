import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignup } from './hooks/useSignUp';

export default function Signup() {
  const navigate = useNavigate();
  const { error, SignUp } = useSignup();
  const mailRef = useRef();
  const passRef = useRef();

  const onSub = async (e) => {
    e.preventDefault();
    try {
      await SignUp(mailRef.current.value, passRef.current.value);
      console.log("signup successful");
      navigate('/resumeForm'); // Redirect to /resume after successful signup
    } catch (error) {
      console.error("signup failed", error);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={onSub}>
        <label>Email:</label>
        <input ref={mailRef} type="email" />
        <br/>
        <label>Password:</label>
        <input ref={passRef} type="password" />
        <h3 className='text-danger'>{error}</h3>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
