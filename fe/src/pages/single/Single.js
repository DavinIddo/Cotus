import React from 'react';
import SinglePost from '../../components/SinglePost/SinglePost';
import Sidebar from '../../components/Sidebar';
import "./Single.css"

function Single() {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    );
}

export default Single;