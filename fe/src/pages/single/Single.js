import React from 'react';
import SinglePost from '../../components/SinglePost/SinglePost';
import Sidebar from '../../components/Sidebar';
import "./Single.css"

function Single({ userData }) {
    return (
        <div className='single'>
            <SinglePost userData={userData} />
            <Sidebar />
        </div>
    );
}

export default Single;