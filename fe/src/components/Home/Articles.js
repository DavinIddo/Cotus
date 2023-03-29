import React, { useEffect, useState } from 'react';
import Article from './Article';
import './Articles.css'

function Articles() {
    const [content, setContent] = useState([]);

    useEffect(() => {

        fetch("/api/article/fetchAllArticles")
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    })

    return (
        <div className='articles'>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
        </div>
    );
}

export default Articles;