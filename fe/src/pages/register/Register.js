import React from 'react';
import './Register.css'

function Register({ handleRegister, errMessage, succMessage }) {
    return (
        <div className='register'>
            <span className='register-title'>R E G I S T E R</span>
            <form className='register-form' onSubmit={(e) => handleRegister(e)}>
                <label htmlFor='register-username'>Username</label>
                <input className='register-username register-input' id='register-username' type='text' placeholder='Enter your username..' required></input>

                <label htmlFor='register-email'>Email</label>
                <input className='register-email register-input' id='register-email' type='email' placeholder='Enter your email..' required></input>

                <label htmlFor='register-password'>Password</label>
                <input className='register-password register-input' id='register-password' type='password' placeholder='Enter your password..' required></input>

                <button className='register-submit'>Register</button>
            </form>

            {errMessage && 
            <div className='register-error'>
                <p>{errMessage}</p>
            </div>}

            {succMessage && 
            <div className='register-success'>
                <p>{succMessage}</p>
            </div>}
        </div>
    );
}

export default Register;