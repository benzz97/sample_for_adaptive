import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import AuthPage from './AuthPage';
import Home from './Home';
import ArticlePage from './ArticlePage'; 

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<AuthPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/article/:id" element={<ArticlePage />} /> 
                    {/* ...other routes */}
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
