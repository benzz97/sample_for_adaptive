import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample article data (normally you would get this from an API call)
const sampleArticleData = {
  status: "ok",
  totalResults: 13927,
  articles: [
    {
      source: {
        id: "a1",
        name: "Wired"
      },
      author: "Joel Khalili",
      title: "What’s Behind the Bitcoin Price Surge? Vibes, Mostly",
      description: "The price of bitcoin has climbed to a new all-time high. But assigning the cryptocurrency a value is anything but trivial.",
      url: "https://www.wired.com/story/bitcoin-price-record-economics/",
      urlToImage: "https://media.wired.com/photos/65ef46042ca08b0e59a9682f/191:100/w_1280,c_limit/031124-business-bitcoin-economics.jpg",
      publishedAt: "2024-03-12T18:13:56Z",
      content: "The latest surge in the price of bitcoin is increasing the clamor around it, says Dal Bianco, drawing in yet more speculators and creating a self-reinforcing cycle. Likewise, when collective confiden… [+2967 chars]"
    },
    {
        source: {
          id: "a2",
          name: "Wired"
        },
        author: "Joel Khalili",
        title: "What’s Behind the Bitcoin Price Surge? Vibes, Mostly",
        description: "The price of bitcoin has climbed to a new all-time high. But assigning the cryptocurrency a value is anything but trivial.",
        url: "https://www.wired.com/story/bitcoin-price-record-economics/",
        urlToImage: "https://media.wired.com/photos/65ef46042ca08b0e59a9682f/191:100/w_1280,c_limit/031124-business-bitcoin-economics.jpg",
        publishedAt: "2024-03-12T18:13:56Z",
        content: "The latest surge in the price of bitcoin is increasing the clamor around it, says Dal Bianco, drawing in yet more speculators and creating a self-reinforcing cycle. Likewise, when collective confiden… [+2967 chars]"
      },
      {
        source: {
          id: "a3",
          name: "Wired"
        },
        author: "Joel Khalili",
        title: "What’s Behind the Bitcoin Price Surge? Vibes, Mostly",
        description: "The price of bitcoin has climbed to a new all-time high. But assigning the cryptocurrency a value is anything but trivial.",
        url: "https://www.wired.com/story/bitcoin-price-record-economics/",
        urlToImage: "https://media.wired.com/photos/65ef46042ca08b0e59a9682f/191:100/w_1280,c_limit/031124-business-bitcoin-economics.jpg",
        publishedAt: "2024-03-12T18:13:56Z",
        content: "The latest surge in the price of bitcoin is increasing the clamor around it, says Dal Bianco, drawing in yet more speculators and creating a self-reinforcing cycle. Likewise, when collective confiden… [+2967 chars]"
      },
      {
        source: {
          id: "a4",
          name: "Wired"
        },
        author: "Joel Khalili",
        title: "What’s Behind the Bitcoin Price Surge? Vibes, Mostly",
        description: "The price of bitcoin has climbed to a new all-time high. But assigning the cryptocurrency a value is anything but trivial.",
        url: "https://www.wired.com/story/bitcoin-price-record-economics/",
        urlToImage: "https://media.wired.com/photos/65ef46042ca08b0e59a9682f/191:100/w_1280,c_limit/031124-business-bitcoin-economics.jpg",
        publishedAt: "2024-03-12T18:13:56Z",
        content: "The latest surge in the price of bitcoin is increasing the clamor around it, says Dal Bianco, drawing in yet more speculators and creating a self-reinforcing cycle. Likewise, when collective confiden… [+2967 chars]"
      },
      {
        source: {
          id: "a5",
          name: "Wired"
        },
        author: "Joel Khalili",
        title: "What’s Behind the Bitcoin Price Surge? Vibes, Mostly",
        description: "The price of bitcoin has climbed to a new all-time high. But assigning the cryptocurrency a value is anything but trivial.",
        url: "https://www.wired.com/story/bitcoin-price-record-economics/",
        urlToImage: "https://media.wired.com/photos/65ef46042ca08b0e59a9682f/191:100/w_1280,c_limit/031124-business-bitcoin-economics.jpg",
        publishedAt: "2024-03-12T18:13:56Z",
        content: "The latest surge in the price of bitcoin is increasing the clamor around it, says Dal Bianco, drawing in yet more speculators and creating a self-reinforcing cycle. Likewise, when collective confiden… [+2967 chars]"
      },
      {
        source: {
          id: "a6",
          name: "Wired"
        },
        author: "Joel Khalili",
        title: "What’s Behind the Bitcoin Price Surge? Vibes, Mostly",
        description: "The price of bitcoin has climbed to a new all-time high. But assigning the cryptocurrency a value is anything but trivial.",
        url: "https://www.wired.com/story/bitcoin-price-record-economics/",
        urlToImage: "https://media.wired.com/photos/65ef46042ca08b0e59a9682f/191:100/w_1280,c_limit/031124-business-bitcoin-economics.jpg",
        publishedAt: "2024-03-12T18:13:56Z",
        content: "The latest surge in the price of bitcoin is increasing the clamor around it, says Dal Bianco, drawing in yet more speculators and creating a self-reinforcing cycle. Likewise, when collective confiden… [+2967 chars]"
      },
    // ... Add more articles as needed
  ]
};

const HomePage = () => {
  const [articles, setArticles] = useState(sampleArticleData.articles); 
  const [searchTerm, setSearchTerm] = useState('');

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
          <Link to={`/article/${article.source.id}`} key={article.source.id} className="article-link">  
          <div key={index} className="article-card">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

