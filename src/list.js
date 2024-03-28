import React, { useState } from 'react';

import './list.css'; 

const SearchableList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false); // Initialize isVisible state to false

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Inline styles for the toggle button
  const toggleButtonStyle = {
    padding: '10px', // Adjust padding as needed
    paddingRight: '300px', // Adjust right padding as needed
    fontSize: '14px', // Increase font size for a larger button
    borderRadius: '6px', // Increase border radius for a rounded button
    border: '1px solid gray', // Set border to gray and reduce thickness
    width: isVisible ? '100%' : 'auto', // Make the button as wide as the container if visible
    textAlign: 'left', // Move the text to the left
    position: 'relative', // Position relative to the parent container
    backgroundColor: '#FBFBFB',
  };

  // Inline styles for the drop-down arrow
  const dropdownArrowStyle = {
    position: 'absolute',
    top: '50%',
    right: '10px', // Adjust the distance from the right side as needed
    fontSize: '24px', // Adjust arrow size
    color: 'black', // Arrow color
  };

  // Inline styles for the "Select Your Provider" text
  const selectProviderStyle = {
    fontSize: '16px', // Set font size to 16px
    color: 'gray', // Set color to gray
    marginBottom: '5px', // Add margin between lines
  };

  return (
    <div className="searchable-list-container">
      <div className="image-left"></div>
      <div className="searchable-list-content">
        {isVisible && (
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            className="search-input"
          />
        )}
        {isVisible && (
          <ul className="list">
            {filteredItems.map((item, index) => (
              <li key={index} className="list-item">{item}</li>
            ))}
          </ul>
        )}
        <button onClick={toggleVisibility} className="toggle-button" style={toggleButtonStyle}>
          Insurer<br />
          <span style={selectProviderStyle}>Find Your Provider</span>
          <i className="arrow down" style={dropdownArrowStyle}></i> {/* Down arrow */}
        </button>
      </div>
      <div className="image-right"></div>
    </div>
  );
};

export default SearchableList;
