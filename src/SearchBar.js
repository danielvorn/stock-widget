import React from "react"
import './SearchBar.css'

function SearchBar() {
    return (
        <div className="search-container">
            <div className="search-bar">
            <input className="input-bubble" placeholder="Stock Ticker" autoFocus/>
            <button className="search-button">
                <span className="search-text">SEARCH</span>
            </button>
            </div>
            <p><span className="search-tip">Search stock by ticker symbol</span></p>
        </div>
    );
}

export default SearchBar;