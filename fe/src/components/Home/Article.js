import React from 'react';
import './Article.css'

function Article({ title, description, createdAt, headerImage }) {
    return (
        <div className='article'>
            <img className='article-photo' alt='' src={headerImage}></img>
            <div className='article-content'>
                <span className='article-date'>Created at {createdAt}</span>
                <br />
                <span className='article-title'>{title}</span>
                <p className='article-description'>{description}</p>
            </div>
        </div>
    );
}

export default Article;