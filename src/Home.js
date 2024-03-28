import React, { useState, useContext } from 'react';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import articlesData from './articlesData';

const sampleArticleData = {
  status: "ok",
  totalResults: 13927,
  articles: articlesData
};

const HomePage = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState(sampleArticleData.articles); 
  const [searchTerm, setSearchTerm] = useState('');
  const { users, updateUserInteractions, currentUser } = useContext(UserContext);

  const handleArticleClick = (articleId) => {
      updateUserInteractions(currentUser.username, 'readArticle', articleId);
      navigate(`/article/${articleId}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
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

      <div className="article-list">
        {articles.map((article, index) => (
          //<Link to={`/article/${article.source.id}`} key={article.source.id} className="article-link">
          <div 
          key={article.source.id} 
            className="article-card" 
            onClick={() => handleArticleClick(article.source.id)}
            style={{ cursor: 'pointer' }} // Add cursor style for visual feedback
          >
            <div className="article-text">
              <h5 className="title">{article.title}</h5>
              <p className="description">{article.description}</p>
              <div className="article-footer">
                <small className="text-muted">By {article.author}</small>
                <small className="text-muted">{new Date(article.publishedAt).toLocaleDateString()} {new Date(article.publishedAt).toLocaleTimeString()}</small>
              </div>
            </div>
            <div className="thumbnail-container">
              <img src={article.urlToImage} className="thumbnail" alt={article.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

