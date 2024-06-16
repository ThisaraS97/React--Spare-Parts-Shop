// SearchBar.js

import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from Font Awesome
import './SearchBar.css'; // Import CSS file for styling

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button type="submit">
        <FaSearch /> Make Model
      </button>
    </div>
  );
}

export default SearchBar;
