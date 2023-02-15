import React from 'react'
import './Signup.css'

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
        </div>
        <button>Sign Up</button>
    </div>
    </>
  )
}

export default Signup
