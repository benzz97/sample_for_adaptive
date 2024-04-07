import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './UserContext';
import articlesData from './articlesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const ArticlePage = () => {
  const { id } = useParams(); // Get the id from the URL
  const article = articlesData.find(article => article.articleId === id);
  const { users, updateUserInteractions, currentUser } = useContext(UserContext);

  // States to track if the user has liked or disliked the current article
  const [hasLiked, setHasLiked] = useState(false);

  // Check if the current article is liked  when component mounts or currentUser changes
  useEffect(() => {
    // Make sure both currentUser and article are defined before trying to access properties
    if (currentUser && article) {
      setHasLiked(currentUser.likedArticles.includes(article.articleId));
    }
  }, [currentUser, article]);

  const handleLike = () => {
    if (currentUser && article) {
      updateUserInteractions(currentUser.username, 'likedArticles', article.articleId);
      setHasLiked(!hasLiked);
    }
  };

  if (!article) {
    return <div>Article not found!</div>;
  }

  // Use article.imageUrl since that's the property name in your data
  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <div className="author-and-date">
        <p className="author">By {article.authorsByline}</p>
        <p className="date">{new Date(article.pubDate).toLocaleDateString()} {new Date(article.pubDate).toLocaleTimeString()}</p>
      </div>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.content}</p>
      <div className="reaction-buttons">
        <button className={`like-button ${hasLiked ? 'active' : ''}`} onClick={handleLike}>
          <FontAwesomeIcon icon={faThumbsUp} /> Like
        </button>
      </div>
    </div>
  );
};

export default ArticlePage;
