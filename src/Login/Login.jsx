import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from './Login.module.css'

const Login = () => {
  const [view, setView] = useState('login');
  const [loggedIn, setLoggedIn] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setSignedUp(true);
  };

  const switchToSignup = () => {
    setView('signup');
    setSignedUp(false);
  };

  const switchToLogin = () => {
    setView('login');
    setLoggedIn(false);
  };

  return (
    <div className=" container d-flex justify-content-center align-items-center " class={styles.wrapper}>
      <div>
        {view === 'login' ? (
          <>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <h1 className="text-center mt-3 ">Login</h1>
              <div className="input-group mb-3 ">
                <input type="text" placeholder='UserName' required className="form-control mt-5" />
                <span className="input-group-text  mt-5"><FaUser /></span>
              </div>
              <div className="input-group mb-3">
                <input type="password" placeholder='Password' required className="form-control  mt-2" />
                <span className="input-group-text  mt-2"><FaLock /></span>
              </div>
              <div className="form-check d-flex justify-content-center mb-3">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">&nbsp;Remember me &nbsp;</label>
                <a href="#" className="text-white text-decoration-none">Forget Password ?</a>
              </div>
              <button type='submit' className="btn btn-white w-100" >{loggedIn ? 'Welcome User' : 'Login'}</button>
              <div className="text-center mt-3" class={styles.Signup}>
                <p>Don't have an account? <span onClick={switchToSignup}  className="text-white  fw-bold">Sign up</span></p>
              </div>
            </form>
            {loggedIn && (
              <>
                <h1 className="text-center">Welcome User</h1>
              </>
            )}
          </>
        ) : (
          <div>
            <h1 className="text-center">Signup</h1>
            <form onSubmit={handleSignup}>
              <div className="input-group mb-3">
                <input type="email" placeholder='Email' required className="form-control mt-5" />
                <span className="input-group-text mt-5"><MdEmail /></span>
              </div>
              <div className="input-group mb-3">
                <input type="text" placeholder='UserName' required className="form-control mt-3"  />
                <span className="input-group-text mt-3"><FaUser /></span>
              </div>
              <div className="input-group mb-3">
                <input type="password" placeholder='Password' required className="form-control mt-3" />
                <span className="input-group-text mt-3"><FaLock /></span>
              </div>
              <button type='submit' className="btn btn-white w-100 mt-3">Signup</button>
              <div className="text-center mt-3" class={styles.Signup}>
                <p>Already have an account? <span onClick={switchToLogin} className="text-white fw-bold">Login</span></p>
              </div>
            </form>
            {signedUp && (
              <>
                <h1 className="text-center">Welcome New User</h1>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;