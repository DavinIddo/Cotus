import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Article from './Article';
import './Articles.css'

function Articles() {
    const [content, setContent] = useState([]);

    useEffect(() => {

        fetch("/api/article/fetchAllArticles")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setContent(data["articles"])
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className='articles'>
            {content.map((article, index) => (
                <Link className='article-link' to={'/single/' + article._id} key={index} state={article}>
                    <Article title={article.title} description={article.description} createdAt={article.createdAt} />
                </Link>
            ))}
        </div>
    );
}

export default Articles;