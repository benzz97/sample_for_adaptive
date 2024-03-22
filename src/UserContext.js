import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]); // To hold the list of users
    const [currentUser, setCurrentUser] = useState(null); // To hold the currently logged-in user

    const addUser = (user) => {
        const newUser = { ...user, readArticles: [], likedArticles: [], dislikedArticles: [] };
        setUsers(prevUsers => [...prevUsers, newUser]);
        setCurrentUser(newUser);
    };

    const loginUser = (username) => {
        const user = users.find(user => user.username === username);
        setCurrentUser(user);
    };
    
/*
    const updateUserInteractions = (username, interactionType, articleId) => {
        setUsers(users =>
            users.map(user => {
                if (user.username === username) {
                    const updatedUser = {
                        ...user,
                        [interactionType]: [...new Set([...user[interactionType], articleId])], // Using Set to ensure uniqueness
                    };
                    console.log(`Updated ${interactionType} for ${username}:`, updatedUser[interactionType]); // Log the updated interactions
                    return updatedUser;
                }
                return user;
            }),
        );
    };
*/
const updateUserInteractions = (username, interactionType, articleId) => {
    setUsers(users =>
        users.map(user => {
            if (user.username === username) {
                const isArticleLiked = user.likedArticles.includes(articleId);
                const isArticleDisliked = user.dislikedArticles.includes(articleId);

                let updatedLikedArticles = [...user.likedArticles];
                let updatedDislikedArticles = [...user.dislikedArticles];

                if (interactionType === 'likedArticles') {
                    if (isArticleLiked) {
                        updatedLikedArticles = updatedLikedArticles.filter(id => id !== articleId);
                        console.log(`${username} unclicked the Like button`); 
                    } else {
                        updatedLikedArticles.push(articleId);
                        updatedDislikedArticles = updatedDislikedArticles.filter(id => id !== articleId);
                        console.log(`${username} liked the article`); 
                    }
                } else if (interactionType === 'dislikedArticles') {
                    if (isArticleDisliked) {
                        updatedDislikedArticles = updatedDislikedArticles.filter(id => id !== articleId);
                        console.log(`${username} unclicked the Dislike button`); 
                    } else {
                        updatedDislikedArticles.push(articleId);
                        updatedLikedArticles = updatedLikedArticles.filter(id => id !== articleId);
                        console.log(`${username} disliked the article`); 

                    }
                }

                return {
                    ...user,
                    likedArticles: updatedLikedArticles,
                    dislikedArticles: updatedDislikedArticles,
                };
            }
            return user;
        }),
    );
};


    return (
        <UserContext.Provider value={{ users, addUser, updateUserInteractions, currentUser, loginUser }}>
            {children}
        </UserContext.Provider>
    );
};
