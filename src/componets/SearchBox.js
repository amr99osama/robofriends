import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <input className="mb3 ba pa3 bg-light-blue"
            type="search"
            placeholder="Search for robos.."
            onChange={searchChange} />
    )
}

export default SearchBox;