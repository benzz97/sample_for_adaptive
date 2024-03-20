import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Home = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <div className="home-page">
            {currentUser ? (
                <h1>Logged in as {currentUser.username}</h1>
            ) : (
                <h1>Welcome to the Home Page</h1>
            )}
        </div>
    );
};

export default Home;
