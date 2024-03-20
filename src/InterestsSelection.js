import React, { useState } from 'react';

const interestsList = [
  'AI', 'VR/AR', 'Sports', 'Outdoor activities', 'Music', 'Dancing',
  'Healthy life', 'Gym & Exercise', 'Reading culture', 'Gaming',
  'Art', 'Writing', 'Architecture', 'Food', 'Commerce', 'Movies',
  'Nature', 'Science', 'Camping', 'TV shows', 'Design', 'Photography',
  'History', 'Spirituality', 'Yoga', 'Books', 'Cooking'
];

const InterestsSelection = ({onInterestsSelected}) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    setSelectedInterests(prevSelected => {
      if (prevSelected.includes(interest)) {
        return prevSelected.filter(i => i !== interest);
      } else {
        return [...prevSelected, interest];
      }
    });
  };

  const handleSubmit = () => {
    onInterestsSelected(selectedInterests);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Select your interests</h2>
      <div className="row">
        {interestsList.map(interest => (
          <div key={interest} className="col-6 col-md-4 mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={interest}
                id={interest}
                checked={selectedInterests.includes(interest)}
                onChange={() => toggleInterest(interest)}
              />
              <label className="form-check-label" htmlFor={interest}>
                {interest}
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary" onClick={handleSubmit}>Get started</button>
      </div>
    </div>
  );
};

export default InterestsSelection;
