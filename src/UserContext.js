import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]); // To hold the list of users
    const [currentUser, setCurrentUser] = useState(null); // To hold the currently logged-in user

    const addUser = (user) => {
        setUsers(prevUsers => [...prevUsers, user]);
    };

    const loginUser = (username) => {
        const user = users.find(user => user.username === username);
        setCurrentUser(user);
    };

    return (
        <UserContext.Provider value={{ users, addUser, currentUser, loginUser }}>
            {children}
        </UserContext.Provider>
    );
};
