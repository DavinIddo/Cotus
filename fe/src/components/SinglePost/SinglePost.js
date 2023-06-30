import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./SinglePost.css"

function SinglePost({ userData }) {
    // Allow us to retrieve the data needed in the "State" parameter within Link component //
    const location = useLocation();
    const postDetail = location.state;

    const [edit, setEdit] = useState(false);
    const [description, setDescription] = useState(postDetail.description);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("inside handleSubmit!", "\nsending changes to backend!")

        const data = {
            author: userData.username,
            title: postDetail.title,
            newDescription: event.target[0].value
        };

        fetch('/api/article/updateArticle', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setEdit(false)
                setDescription(data.newDesc)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='singlepost'>
            <div className='singlepost-wrapper'>
                <img className='singlepost-image' alt=''
                    src='https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                </img>
                <h1 className='singlepost-title'>
                    {postDetail.title}

                    {(userData) && (postDetail.author === userData.username) &&
                        <div className='singlepost-modification'>
                            <i className="singlepost-icon fa-solid fa-pen-to-square edit" onClick={() => setEdit(true)} />
                            <i className="singlepost-icon fa-solid fa-trash delete"></i>
                        </div>
                    }
                </h1>
                <div className='singlepost-info'>
                    <span className='singlepost-author'>Author: <b>{postDetail.author}</b> </span>
                    <span className='singlepost-date'>{postDetail.createdAt}</span>
                </div>

                {!(edit) ?
                    <p className='singlepost-description'>
                        {description}
                    </p>
                    :
                    <form className='singlepost-form' onSubmit={(e) => handleSubmit(e)}>
                        <textarea className='singlepost-edit' required>{description}</textarea>
                        <button type="submit" className='singlepost-edit-done'>Change</button>
                        <button type="button" className='singlepost-edit-cancel' onClick={() => setEdit(false)}>Cancel</button>
                    </form>
                }
            </div>
        </div>
    );
}

export default SinglePost;