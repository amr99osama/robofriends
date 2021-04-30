import React from 'react';

const SearchBox = ({ SearchField, searchChange }) => {
    return (
        <input className="mb3 ba pa3 bg-light-blue"
            type="search"
            placeholder="Search for robos.."
            onChange={searchChange} />
    )
}

export default SearchBox;