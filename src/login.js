import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './hooks/useLogin';

export default function Login() {
  const navigate = useNavigate();
  const { error, login } = useLogin();
  const mailRef = useRef();
  const passRef = useRef();

  const onSub = async (e) => {
    e.preventDefault();
    try {
      await login(mailRef.current.value, passRef.current.value);
      console.log("login successful");
      navigate('/appResume'); // Redirect to /resume after successful login
    } catch (error) {
      console.error("login failed", error);
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
