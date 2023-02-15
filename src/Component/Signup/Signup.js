import React from 'react'
import './Signup.css'
import goggle from '../../asset/img/goggle.svg'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
      <div className='signup'>
        <h1>Sign Up</h1>
        <div className='form'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
          <button>Sign Up</button>
          <div className='or'>
            <hr />
            Or
            <hr />
          </div>
          <div className='signup-options'>
            <div className='option'>
              <img src={goggle} alt='' />
              <h6>Authorize with Goggle</h6>
            </div>
          </div>
          <div className='already'>
            <h6>Already have an account?</h6>
            <Link to='/Signin' className='sign'>Sign in</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
