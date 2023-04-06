import React, { useEffect, useState } from 'react';
import Article from './Article';
import './Articles.css'

function Articles() {
    const [content, setContent] = useState([]);

    useEffect(() => {

        fetch("/api/article/fetchAllArticles")
            .then(response => response.json())
            .then(data => {
                setContent(data["articles"])
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className='articles'>
            {content.map((article, index) => (
                <Article key={index} title={article.title} description={article.description} createdAt={article.createdAt} />
            ))}
        </div>
    );
}

export default Articles;