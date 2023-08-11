import React from 'react';
import './Article.css'

function Article({ title, description, createdAt }) {
    return (
        <div className='article'>
            <img className='article-photo' alt='' 
                src='https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            </img>
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