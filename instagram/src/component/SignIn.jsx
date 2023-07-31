import React from 'react'
import logo from './insta_logo.png'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='signUp'>
    <div className="signcard">
      <div className="sign-img">
          <img src={logo} alt="logo" />
      </div>
      <div className="sign-input">
          <input type="text" placeholder='Mobile Number or Email' />
          <input type="password" placeholder='Password'/>
      </div>
      <div className="signbtn">
          <Link to='/'>Sign in</Link>
      </div>
      <div className="sign-opt">
          <p>Don't have account? <span>Sign up</span></p>
      </div>
    </div>
  </div>
  )
}

export default SignIn
