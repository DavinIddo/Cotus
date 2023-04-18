import React from 'react';
import { useLocation } from 'react-router-dom';
import "./SinglePost.css"

function SinglePost() {
    // Allow us to retrieve the data needed in the "State" parameter within Link component //
    const location = useLocation();
    const postDetail = location.state;

    return (
        <div className='singlepost'>
            <div className='singlepost-wrapper'>
                <img className='singlepost-image' alt=''
                    src='https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                </img>
                <h1 className='singlepost-title'>
                    {postDetail.title}
                    <div className='singlepost-modification'>
                        <i className="singlepost-icon fa-solid fa-pen-to-square edit"></i>
                        <i className="singlepost-icon fa-solid fa-trash delete"></i>
                    </div>
                </h1>
                <div className='singlepost-info'>
                    <span className='singlepost-author'>Author: <b>{postDetail.author}</b> </span>
                    <span className='singlepost-date'>{postDetail.createdAt}</span>
                </div>
                <p className='singlepost-description'>
                    {postDetail.description}
                </p>
            </div>
        </div>
    );
}

export default SinglePost;