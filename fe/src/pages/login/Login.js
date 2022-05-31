import React from 'react';
import './Login.css'

function Login({ handleLogin, errMessage }) {
    return (
        <div className='login'>
            <span className='login-title'>L O G I N</span>
            <form className='login-form' onSubmit={(e) => handleLogin(e)}>
                <label htmlFor='login-username'>Username</label>
                <input className='login-username login-input' id='login-username' type='text' placeholder='Enter your username..' required />

                <label htmlFor='login-password'>Password</label>
                <input className='login-password login-input' id='login-password' type='password' placeholder='Enter your password..' required />

                <button className='login-submit'>Login</button>
            </form>

            {errMessage && 
            <div className='login-error'>
                <p>{errMessage}</p>
            </div>}
        </div>
    );
}

export default Login;