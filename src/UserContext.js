import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]); // To hold the list of users
    const [currentUser, setCurrentUser] = useState(null); // To hold the currently logged-in user

    const addUser = (user) => {
        const newUser = { ...user, readArticles: [], likedArticles: []};
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

                let updatedLikedArticles = [...user.likedArticles];
                let updatedReadArticles = [...user.readArticles];

                if (interactionType === 'likedArticles') {
                    if (isArticleLiked) {
                        updatedLikedArticles = updatedLikedArticles.filter(id => id !== articleId);
                        console.log(`${username} unclicked the Like button`); 
                    } else {
                        updatedLikedArticles.push(articleId);
                        console.log(`${username} liked the article`); 
                    }
                } else if (interactionType === 'readArticle') {
                        updatedReadArticles.push(articleId);
                        console.log(`${username} clicked the article ${articleId} to read`); 
                }
                return {
                    ...user,
                    readArticles: updatedReadArticles,
                    likedArticles: updatedLikedArticles,
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
