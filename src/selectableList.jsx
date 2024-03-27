import React, { useState } from 'react';

const SearchableDropdown = ({ options }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    // Filter options based on the search query
    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle selection of an option
    const handleSelectOption = option => {
        setSelectedOption(option);
        setSearchQuery(''); // Clear the search query after selecting an option
    };

    return (
        <div>
            {/* Input field for searching */}
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />

            {/* Dropdown list */}
            <ul>
                {filteredOptions.map(option => (
                    <li key={option} onClick={() => handleSelectOption(option)}>
                        {option}
                    </li>
                ))}
            </ul>

            {/* Display selected option */}
            {selectedOption && <p>Selected Option: {selectedOption}</p>}
        </div>
    );
};

export default SearchableDropdown;
