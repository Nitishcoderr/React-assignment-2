import React from 'react'
import logo from './insta_logo.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signUp'>
      <div className="signcard">
        <div className="sign-img">
            <img src={logo} alt="logo" />
        </div>
        <div className="sign-input">
            <input type="text" placeholder='Mobile Number or Email' />
            <input type="text" placeholder='Full name' />
            <input type="text" placeholder='Phone Number, username, or email' />
            <input type="password" placeholder='Password'/>
        </div>
        <div className="signbtn">
            <Link to='/signin'>Sign up</Link>
        </div>
        <div className="sign-opt">
            <p>Have an account? <span>Log in</span></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
