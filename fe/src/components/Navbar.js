import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar({ user, handleLogout }) {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <div className='logo-left'>B L O G E</div>
            </div>
            <div className='navbar-center'>
                <ul className='list-items'>
                    <li className='item-center'>
                        <Link className='navbar-link' to='/'>HOME</Link>
                    </li>
                    <li className='item-center'>
                        <Link className='navbar-link' to='/'>ABOUT</Link>
                    </li>
                    <li className='item-center'>
                        <Link className='navbar-link' to='/'>CONTACT</Link>
                    </li>
                    <li className='item-center'>
                        <Link className='navbar-link' to='/write'>WRITE</Link>
                    </li>
                    {user &&
                    <li className='item-center'>
                        <Link className='navbar-link' to='/login' onClick={() => handleLogout(false)}>LOGOUT</Link>
                    </li>}
                </ul>
            </div>
            <div className='navbar-right'>
                {user ? (
                    <Link to='/profile'>
                        <i className="navbar-user fa-solid fa-user-large"></i>
                    </Link>
                ) : (
                    <ul className='list-items'>
                        <li className='item-right'>
                            <Link className='navbar-link' to='/login'>Login</Link>
                        </li>
                        <li className='item-right'>
                            <Link className='navbar-link' to='/register'>Register</Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Navbar;