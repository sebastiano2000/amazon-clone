import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();
  }

  const register = e => {
    e.preventDefault();
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img 
          className='login_logo' 
          src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png'
          alt=''/>
      </Link>

      <div className='login_container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange=
            {e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input type='password' value={[password]} onChange=
            {e => setPassword(e.target.value)}
          />

          <button className='login_signInButton' type='submit' onClick={signIn}>Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon Clone's 
          Conditions of Use and Privacy Notice.
        </p>

        <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login

