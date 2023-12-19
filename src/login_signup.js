import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { database } from './firebase/config';

export default function AuthForm() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (isLogin) => {
    console.log("login", isLogin);
    setLogin(isLogin);
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          navigate("/resumeForm");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });

    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          navigate("/appResume");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    navigate("/reset");
  };

  return (
    <div className='container m-5'>
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label ">Email:</label>
          <div className="col-sm-10">
            <input name="email" className='form-control' type="email" id="email" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label ps-1">Password:</label>
          <div className="col-sm-10">
            <input name="password" className='form-control' type="password" id="password" />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 ">
          <button type="submit" className='btn btn-success col-4 mx-2' onClick={() => handleLogin(true)}>Log in</button>
          <button type="submit" className='btn btn-primary col-4 mx-2' onClick={() => handleLogin(false)}>Sign up</button>
        </div>
      </form>
    </div>
  );
}
