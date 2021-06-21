import React, {useState} from "react"
import './SearchBar.css'

function SearchBar({setFrame}) {

    const showFrame = () => setFrame(result => !result)

    return (
        <div className="search-container">
            <div className="search-bar">
            <input className="input-bubble" placeholder="Stock Ticker" autoFocus/>
            <button
                className="search-button"
                onClick={showFrame}
            >
                <span className="search-text">SEARCH</span>
            </button>
            </div>
        </div>
    );
}

export default SearchBar;