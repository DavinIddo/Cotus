import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar'
import './Profile.css'

function Profile({ userData }) {
    const [username, setUsername] = useState(userData.username);
    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [succMessage, setSuccMessage] = useState("");
    const [updateStatus, setUpdateStatus] = useState(false);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
        setUpdateStatus(true);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
        setUpdateStatus(true);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
        setUpdateStatus(true);
    }

    function handleUpdate(event) {
        event.preventDefault();

        let okStatus;
        const data = {
            userInfo: [userData.username, userData.email],
            newUsername: username,
            newEmail: email,
            newPassword: password
        };

        fetch("/api/profile/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                okStatus = response.ok;
                return response.json();
            })
            .then((data) => {
                if (!okStatus) {
                    setErrMessage(data["message"]);
                    setSuccMessage('');
                    throw new Error(data["message"]);
                }

                setErrMessage("");
                setSuccMessage(data["message"]);
                userData.username = username;
                userData.email = email;
            })
    }

    return (
        <div className='profile'>
            <div className='profile-main'>
                <p className='profile-title'>Update your account</p>

                <form className='profile-form' onSubmit={(e) => handleUpdate(e)}>
                    <label className='profile-label' htmlFor='profile-username'>Username</label>
                    <input className='profile-username profile-text' type='text' id='profile-username' value={username} onChange={(e) => handleUsernameChange(e)} required />

                    <label className='profile-label' htmlFor='profile-email'>Email</label>
                    <input className='profile-email profile-text' type='email' id='profile-email' value={email} onChange={(e) => handleEmailChange(e)} required />

                    <label className='profile-label' htmlFor='profile-password'>Password</label>
                    <input className='profile-password profile-text' type='password' id='profile-password' onChange={(e) => handlePasswordChange(e)} />

                    {updateStatus && <button className='profile-update'>Update</button>}

                    {errMessage &&
                        <div className='update-error update-animation'>
                            <p>{errMessage}</p>
                        </div>}

                    {succMessage &&
                        <div className='update-success update-animation'>
                            <p>{succMessage}</p>
                        </div>}

                </form>
            </div>
            <Sidebar />
        </div>
    );
}

export default Profile;