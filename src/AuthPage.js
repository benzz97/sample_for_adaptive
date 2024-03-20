/*
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import InterestsSelection from './InterestsSelection';

const AuthPage = () => {
    const navigate = useNavigate(); // Hook for redirection
    const { addUser, loginUser, users } = useContext(UserContext);
    //const [pageState, setPageState] = useState('initial'); // 'initial', 'login', or 'register'
    const [isRegistering, setIsRegistering] = useState(false);
    const [isLogin, setIsLogin] = useState(true); 

    const [showRegister, setShowRegister] = useState(false); // New state to toggle registration
    const [showLogin, setShowLogin] = useState(false); // New state to toggle login
    const [selectedUser, setSelectedUser] = useState(''); // State to track the selected user
    
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [occupation, setOccupation] = useState('');
    const [interests, setInterests] = useState([]);

    const handleRegisterClick = () => {
        setIsRegistering(true); // Move to the interests selection part of the registration
    };

    const handleUserSelection = (e) => {
        setSelectedUser(e.target.value);
    };

    const handleInterestsSelected = (selectedInterests) => {
        const newUser = { username, age, gender, occupation, interests: selectedInterests };
        addUser(newUser);
        navigate('/home');   //create a new user and redirect to Home page
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (selectedUser) {
            loginUser(selectedUser);
            navigate('/home');
        }
    };

    
    return (
        <div className="container">
            {isRegistering ? (
                <InterestsSelection onInterestsSelected={handleInterestsSelected} />
            ) : (
                <div className="container">
                    {isLogin ? (
                        <div>
                            <h2>Login</h2>
                            <br></br>
                            <select className="form-select" value={username} onChange={(e) => setUsername(e.target.value)}>
                                <option>Select a user</option>
                                {users.map((user) => (
                                    <option key={user.username} value={user.username}>
                                        {user.username}
                                    </option>
                                ))}
                            </select>
                            <br></br>
                            <h3>Already a User?</h3>
                            <br></br>
                            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                            <br></br>
                        </div>
                    ) : (
                    <div>
                        <h2>Register</h2>
                        <br></br>
                        <input className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <br></br>
                        <input className="form-control" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                        <br></br>
                        <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select><br></br>
                        <input className="form-control" placeholder="Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} /><br></br>
                        
                        <button className="btn btn-primary" onClick={handleRegisterClick}>Register</button>
                    </div>
                )}
                <br></br>
                <button className="btn btn-secondary" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Register' : 'Login'}
                </button>
            </div> 
            )}
        </div>
    );
};

export default AuthPage;
*/

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import InterestsSelection from './InterestsSelection';

const AuthPage = () => {
    const navigate = useNavigate();
    const { addUser, loginUser, users } = useContext(UserContext);
    const [currentView, setCurrentView] = useState('initial'); // 'initial', 'login', 'register', 'interests'
    const [selectedUser, setSelectedUser] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [occupation, setOccupation] = useState('');
    const [interests, setInterests] = useState([]);

    const handleLoginClick = () => {
        setCurrentView('login');
    };

    const handleRegisterClick = () => {
        setCurrentView('register');
    };

    const handleUserChange = (e) => {
        setSelectedUser(e.target.value);
    };

    const handleLogin = () => {
        if (selectedUser) {
            loginUser(selectedUser);
            navigate('/home');
        }
    };

    const handleInterestsSelected = (selectedInterests) => {
        const newUser = { username, age, gender, occupation, interests: selectedInterests };
        addUser(newUser);
        navigate('/home');
    };

    console.log(users); // Add this inside your AuthPage component to log the current users state

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
            {currentView === 'initial' && (
                <>
                    <h1>Hello!</h1><br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <h3 className="mb-0 mr-2">Already a User?</h3>
                        <button className="btn btn-primary m-2" onClick={handleLoginClick}>LOGIN</button>
                    </div>
                    <br></br>
                    <h4>OR</h4>
                    <br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <h3>New here?</h3><br></br>
                        <button className="btn btn-secondary m-2" onClick={handleRegisterClick}>REGISTER</button>
                    </div>
                </>
            )}
            {currentView === 'login' && (
                <>
                    <h2>Welcome back!</h2>
                    <select className="form-select m-2" value={selectedUser} onChange={handleUserChange}>
                        <option value="">Select a user</option>
                        {users.map((user) => (
                            <option key={user.username} value={user.username}>{user.username}</option>
                        ))}

                    </select>
                    <button className="btn btn-primary m-2" onClick={handleLogin} disabled={!selectedUser}>
                        Login
                    </button>
                </>
            )}
            {currentView === 'register' && (
                <>
                    <h2>Register</h2>
                    <br></br>
                        <input className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <br></br>
                        <input className="form-control" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                        <br></br>
                        <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select><br></br>
                        <input className="form-control" placeholder="Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} /><br></br>
                    <button className="btn btn-primary m-2" onClick={() => setCurrentView('interests')}>Next</button>
                </>
            )}
            {currentView === 'interests' && (
                <InterestsSelection onInterestsSelected={handleInterestsSelected} />
            )}
        </div>
    );
};

export default AuthPage;
