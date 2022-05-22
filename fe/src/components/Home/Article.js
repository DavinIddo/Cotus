import React from 'react';
import './Article.css'

function Article() {
    return (
        <div className='article'>
            <img className='article-photo' alt='' 
                src='https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            </img>
            <div className='article-content'>
                <span className='article-title'>The mysterious white sea</span>
                <br />
                <span className='article-date'>4 January 2020</span>
            </div>
            <p className='article-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus arcu tincidunt risus lacinia, vitae auctor tellus auctor. 
                Nullam molestie aliquet nisi, sit amet maximus urna tincidunt ut. Nulla consequat hendrerit tortor at elementum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus arcu tincidunt risus lacinia, vitae auctor tellus auctor. 
                Nullam molestie aliquet nisi, sit amet maximus urna tincidunt ut. Nulla consequat hendrerit tortor at elementum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus arcu tincidunt risus lacinia, vitae auctor tellus auctor. 
                Nullam molestie aliquet nisi, sit amet maximus urna tincidunt ut. Nulla consequat hendrerit tortor at elementum. 
            </p>
        </div>
    );
}

export default Article;