import React, { useState } from 'react';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
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
    padding: '20px 150px', // Adjust padding as needed
    fontSize: '14px', // Increase font size for a larger button
    borderRadius: '12px', // Increase border radius for a rounded button
    width: isVisible ? '100%' : 'auto', // Make the button as wide as the container if visible
    textAlign: 'left', // Move the text to the left
    position: 'relative', // Position relative to the parent container
  };

  // Inline styles for the drop-down arrow
  const dropdownArrowStyle = {
    position: 'absolute',
    top: '50%',
    right: '10px', // Adjust the distance from the right side as needed
    transform: 'translateY(-50%)', // Center vertically
    fontSize: '24px', // Adjust arrow size
    color: 'black', // Arrow color
  };

  // Inline styles for the "Select Your Provider" text
  const selectProviderStyle = {
    fontSize: '16px', // Set font size to 16px
    color: 'gray', // Set color to gray
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
          <span style={selectProviderStyle}>Select Your Provider</span>
          <i className="arrow down" style={dropdownArrowStyle}></i> {/* Down arrow */}
        </button>
      </div>
      <div className="image-right"></div>
    </div>
  );
};

export default SearchableList;
