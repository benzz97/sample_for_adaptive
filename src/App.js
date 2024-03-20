import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import AuthPage from './AuthPage';
import Home from './Home';

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<AuthPage />} />
                    <Route path="/home" element={<Home />} />
                    {/* ...other routes */}
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
