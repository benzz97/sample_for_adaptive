import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './UserContext';
import articlesData from './articlesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const ArticlePage = () => {
  const { id } = useParams(); // Get the id from the URL
  const article = articlesData.find(article => article.source.id === id);
  const { users, updateUserInteractions, currentUser } = useContext(UserContext);

  // States to track if the user has liked or disliked the current article
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);

  // Check if the current article is liked or disliked when component mounts or currentUser changes
  useEffect(() => {
    if (currentUser) {
      setHasLiked(currentUser.likedArticles.includes(article.source.id));
      setHasDisliked(currentUser.dislikedArticles.includes(article.source.id));
    }
  }, [currentUser, article.source.id]);

  const handleLike = () => {
    if (currentUser) {
      updateUserInteractions(currentUser.username, 'likedArticles', article.source.id);
      setHasLiked(!hasLiked); // Toggle like state
      if (hasDisliked) setHasDisliked(false); // If previously disliked, unset dislike
    }
  };

  const handleDislike = () => {
    if (currentUser) {
      updateUserInteractions(currentUser.username, 'dislikedArticles', article.source.id);
      setHasDisliked(!hasDisliked); // Toggle dislike state
      if (hasLiked) setHasLiked(false); // If previously liked, unset like
    }
  };
  /*
  const handleLike = () => {
    if (currentUser) {
      console.log(`Attempting to like article ${article.source.id} for user ${currentUser?.username}`);
        updateUserInteractions(currentUser.username, 'likedArticles', article.source.id); 
    }
  };

  const handleDislike = () => {
    if (currentUser) {
        updateUserInteractions(currentUser.username, 'dislikedArticles', article.source.id);
    }
  };
  */

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
        <button className={`like-button ${hasLiked ? 'active' : ''}`} onClick={handleLike}>
          <FontAwesomeIcon icon={faThumbsUp} /> Like
        </button>
        <button className={`dislike-button ${hasDisliked ? 'active' : ''}`} onClick={handleDislike}>
          <FontAwesomeIcon icon={faThumbsDown} /> Dislike
        </button>
      </div>
    </div>
  );
};

export default ArticlePage;
