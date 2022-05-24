import React from 'react';
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-item'>
                <span className='profile-about'>A B O U T &nbsp; &nbsp; &nbsp; M E</span>
                <img className='profile-picture' alt=''
                    src='https://images.pexels.com/photos/736532/pexels-photo-736532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' >
                </img>
                <p className='profile-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam sit amet mi tempor sagittis. 
                    Nunc at enim posuere, egestas lectus eu, gravida turpis. Etiam eget tortor eu nisl tempor molestie tincidunt at massa.
                </p>
            </div>
            <div className='sidebar-item'>
                <span className='profile-about'>Contact Me</span>
                <div className='sidebar-contact'>
                    <i className="fa-brands fa-facebook-square fa-2xl sidebar-contact-link"></i>
                    <i className="fa-brands fa-twitter-square fa-2xl sidebar-contact-link"></i>
                    <i className="fa-brands fa-instagram-square fa-2xl sidebar-contact-link"></i>
                    <i className="fa-brands fa-linkedin fa-2xl sidebar-contact-link"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;