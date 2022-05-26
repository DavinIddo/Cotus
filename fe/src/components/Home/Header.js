import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header-titles'>
                <p className='header-title-top'>B L O G E</p>
                <p className='header-title-bottom'>
                    Write different types of stories! <br />
                    or Read the ones that has been weaved by others!
                </p>
            </div>
            <img className='header-image' alt=''
                src='https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>    
            </img>
        </div>
    );
}

export default Header;