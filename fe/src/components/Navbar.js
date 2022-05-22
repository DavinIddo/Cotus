import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <div className='logo-left'>B L O G E</div>
            </div>
            <div className='navbar-center'>
                <ul className='list-items'>
                    <li className='item-center'>HOME</li>
                    <li className='item-center'>ABOUT</li>
                    <li className='item-center'>CONTACT</li>
                    <li className='item-center'>WRITE</li>
                    <li className='item-center'>LOGOUT</li>
                </ul>
            </div>
            <div className='navbar-right'>
                <ul className='list-items'>
                    <li className='item-right'>Login</li>
                    <li className='item-right'>Register</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;