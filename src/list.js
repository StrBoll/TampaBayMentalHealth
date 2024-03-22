import React, { useState } from 'react';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import './list.css'; 

const SearchableList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="searchable-list-container">
      <div className="image-left">
      <img src={image3} alt="Left" />
      </div>
      <div className="searchable-list-content">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        <ul className="list">
          {filteredItems.map((item, index) => (
            <li key={index} className="list-item">{item}</li>
          ))}
        </ul>
      </div>
      <div className="image-right">
      <img src={image3} alt="Right" />
      </div>
    </div>
  );
};

export default SearchableList;