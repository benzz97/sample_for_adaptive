import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import articlesData from './articlesData';

const timeAgo = (dateString) => {
  const date = new Date(dateString);
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
};

const LRpage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { users, updateUserInteractions, currentUser } = useContext(UserContext);
  const [hoveredArticleId, setHoveredArticleId] = useState(null);


  const handleArticleClick = (articleId) => {
      updateUserInteractions(currentUser.username, 'readArticle', articleId);
      navigate(`/article/${articleId}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleArticleHover = (articleId) => {
    setHoveredArticleId(articleId);
  };

  // Function to reset hover state
  const handleArticleHoverEnd = () => {
    setHoveredArticleId(null);
  };

    return (      
        <div className="home-container">
          <div className="header d-flex justify-content-between align-items-center">
          <h2>LIFT model Recommendations</h2>
          </div>
      
        <div className="article-list">
            {articlesData.map((article) => (
            <div 
                key={article.articleId} 
                className="article-card" 
                onMouseEnter={() => handleArticleHover(article.articleId)}
                onMouseLeave={handleArticleHoverEnd}
                onClick={() => handleArticleClick(article.articleId)}
            >
                <div className="article-content">
                <div className="article-text">
                    <span className="time">{timeAgo(article.pubDate)}</span>
                    <h5 className="title">{article.title}</h5>
                    <div className="article-meta">
                    <span className="source">{article.source.domain}</span>
                    </div>
                </div>
                <div className="article-image-container">
                    <img src={article.imageUrl} alt={article.title} className="article-image" />
                </div>
                </div>
                {hoveredArticleId === article.articleId && (
                <div className="article-expanded-info">
                    <p className="description">{article.description}</p>
                    <div className="keywords">
                    {article.keywords.map((keyword, index) => (
                        <span key={index} className="keyword">{keyword.name}</span>
                    ))}
                    </div>
                </div>
                )}
            </div>
            ))}
      </div>
    </div>
  );
};

export default LRpage;