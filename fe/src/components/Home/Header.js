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
            <div className='header-image' />
        </div>
    );
}

export default Header;