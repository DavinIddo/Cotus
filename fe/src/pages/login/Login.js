import React from 'react';
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <span className='login-title'>L O G I N</span>
            <form className='login-form'>
                <label htmlFor='login-username'>Username</label>
                <input className='login-username login-input' id='login-username' type='text' placeholder='Enter your username..' required></input>

                <label htmlFor='login-password'>Password</label>
                <input className='login-password login-input' id='login-password' type='text' placeholder='Enter your password..' required></input>

                <button className='login-submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;