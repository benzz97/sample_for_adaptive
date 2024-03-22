import React from 'react';
import { useParams } from 'react-router-dom';
import articlesData from './articlesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const ArticlePage = () => {
  const { id } = useParams(); // Get the id from the URL
  const article = articlesData.find(article => article.source.id === id);

  if (!article) {
    return <div>Article not found!</div>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <div className="author-and-date">
        <p className="author">By {article.author}</p>
        <p className="date">{new Date(article.publishedAt).toLocaleDateString()} {new Date(article.publishedAt).toLocaleTimeString()}</p>
      </div>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
      <div className="reaction-buttons">
        <button className="like-button">
          <FontAwesomeIcon icon={faThumbsUp} /> Like
        </button>
        <button className="dislike-button">
          <FontAwesomeIcon icon={faThumbsDown} /> Dislike
        </button>
      </div>
    </div>
  );
};

export default ArticlePage;
