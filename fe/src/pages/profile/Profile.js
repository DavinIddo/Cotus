import React from 'react';
import Sidebar from '../../components/Sidebar'
import './Profile.css'

function Profile() {
    return (
        <div className='profile'>
            <div className='profile-main'>
                <p className='profile-title'>Update your account</p>

                <form className='profile-form'>
                    <label className='profile-label' htmlFor='profile-image'>Profile Picture</label>
                    <div className='profile-group'>
                        <img className='profile-image' alt='' id='profile-image'
                            src='https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                        </img>

                        <label htmlFor='profile-input' >
                            <i className="profile-file fa-solid fa-image"></i>
                        </label>
                        <input className='write-file-hidden' id='profile-input' type='file' accept="image/png, image/jpeg" hidden />
                    </div>

                    <label className='profile-label' htmlFor='profile-username'>Username</label>
                    <input className='profile-username profile-text' type='text' id='profile-username' placeholder='Jessi' required />

                    <label className='profile-label' htmlFor='profile-email'>Email</label>
                    <input className='profile-email profile-text' type='email' id='profile-email' placeholder='jessi@gmail.com' required />
                    
                    <label className='profile-label' htmlFor='profile-password'>Password</label>
                    <input className='profile-password profile-text' type='password' id='profile-password' />

                    <button className='profile-update'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}

export default Profile;