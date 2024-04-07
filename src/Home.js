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

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { users, updateUserInteractions, currentUser } = useContext(UserContext);
  const [hoveredArticleId, setHoveredArticleId] = useState(null);

  const handleButtonClick = (path) => {
    navigate(path);
  };

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

  
  // Search functionality not implemented as of now.
  // const filteredArticles = articles.filter(article =>
  //   article.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

    return (      
        <div className="home-container">
          <div className="header d-flex justify-content-between align-items-center">
            <h1>Your ZeusNews</h1>
            <div className="input-group" style={{ maxWidth: '250px', borderRadius: '1.5rem', border: '1px solid #ced4da' }}>
              <input 
                type="text" 
                className="form-control"
                placeholder="Search news..." 
                aria-label="Search news" 
                value={searchTerm} 
                onChange={handleSearchChange}
                style={{border: 'none', borderRadius: '1.5rem'}}
              />
              <div className="input-group-append">
                <span className="input-group-text" style={{border: 'none', background: 'transparent'}}>
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        {/* Button group */}
      <div className="button-group" style={{margin: '20px 0' }}>
        <button className="nav-button" onClick={() => handleButtonClick('/SRpage')} style={{ borderRadius: '15px', marginRight: '10px' }}>My Preferred Source News</button>
        <button className="nav-button" onClick={() => handleButtonClick('/CRpage')} style={{ borderRadius: '15px', marginRight: '10px' }}>My Interests' News</button>
        <button className="nav-button" onClick={() => handleButtonClick('/LRpage')} style={{ borderRadius: '15px' }}>LIFT model News</button>
        <button className="user-model-button" onClick={() => handleButtonClick('/UserModelpage')}>Edit preferences</button>
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

export default HomePage;