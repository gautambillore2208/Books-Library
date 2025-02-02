


import { useState } from 'react';
import { Books } from "../utils/mockData"; // Assuming Books is an array of books

function Search({ filterfun }) {
    const [searchText, setSearchText] = useState("");

    // Function to handle search and filtering
    function handleSearch() {
       const filteredBooks = Books.filter((book) =>
         book.title.toLowerCase().includes(searchText.toLowerCase())
       );
       filterfun(filteredBooks);  // Pass the filtered list back to the parent
    }

    return (
        <div className='box3'>
        <div className="search-box">
            <h2>Search Books</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search Books"
                    className="search-input"
                    value={searchText}  // Make input controlled
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
        </div>
        </div>
    );
}

export default Search;
