import React, { useState, useContext, useEffect } from 'react';
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
    const [isUsernameUnique, setIsUsernameUnique] = useState(true); 

    const handleLoginClick = () => {
        setCurrentView('login');
    };

    const handleRegisterClick = () => {
        setCurrentView('register');
    };

    const handleUserChange = (e) => {
        setSelectedUser(e.target.value);
    };

    useEffect(() => {
        // Check if the entered username is unique whenever it changes
        const usernameExists = users.some(user => user.username === username);
        setIsUsernameUnique(!usernameExists);
    }, [username, users]);

    const handleLogin = () => {
        if (selectedUser) {
            loginUser(selectedUser);
            console.log(users); // Adding this to log the current users state
            navigate('/home');
        }
    };

    const handleInterestsSelected = (selectedInterests) => {
        const newUser = {
            username,
            age,
            gender,
            occupation,
            interests: selectedInterests,
          };
        addUser(newUser);
        console.log(users); // Adding this to log the current users state
        navigate('/home');
    };

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
                        { !isUsernameUnique && <p style={{color: 'red'}}>Username is already taken, please choose another one.</p> }
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
                        <button className="btn btn-primary m-2" onClick={() => setCurrentView('interests')} disabled={!isUsernameUnique || !username}>
                           Next
                        </button>
                </>
            )}
            {currentView === 'interests' && (
                <InterestsSelection onInterestsSelected={handleInterestsSelected} />
            )}
        </div>
    );
};

export default AuthPage;
