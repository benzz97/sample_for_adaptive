import React, { useState } from 'react';
import './UserModel.css';

// Mock data to simulate user interests with scores
const initialInterests = [
  { name: "Technology", score: 70 },
  { name: "Sports", score: 50 },
  { name: "Music", score: 80 },
  { name: "Art", score: 60 },
  { name: "Science", score: 90 }
];

const UserModelpage = () => {
    const [interests, setInterests] = useState(initialInterests);

    const handleScoreChange = (index, newScore) => {
        // Update the score of the interest at the given index
        const updatedInterests = interests.map((interest, i) =>
            i === index ? { ...interest, score: newScore } : interest
        );
        setInterests(updatedInterests);
    };

    const saveInterestScores = () => {
        // Here you would send the data to the backend
        // For now, we'll just log it to the console
        console.log('Interests to be saved:', interests);
        alert('Interests saved locally (not persisted to backend in this demo).');
    };

    return (
        <div className="user-interests-container">
            <h2>Edit Interests</h2>
            <br></br>
            {interests.map((interest, index) => (
                <div key={interest.name} className="interest-item">
                    <label>{interest.name}</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={interest.score}
                        onChange={(e) => handleScoreChange(index, e.target.value)}
                    />
                    <span>{interest.score}%</span>
                </div>
            ))}
            <button onClick={saveInterestScores} style={{ borderRadius: '15px', marginRight: '10px' }}>Save</button>
        </div>
    );
};

export default UserModelpage;
