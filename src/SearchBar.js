import React, {useState} from "react"
import "./SearchBar.css"
import {getStock} from "./client";

function SearchBar({setFrame, setStock, setError}) {

    const [ticker, setTicker] = useState("");

    const handleInput = input => {
        if (input === "") {
            setFrame(false)
            setError(false)
        } else {
            setTicker(input)
        }
    }

    const onSubmit = async () => {
        try {
            const request = await getStock(ticker)
            setStock(request.data)
            setFrame(true)
        } catch(error) {
            if (error.response.status === 404) {
                setFrame(false)
                setError(true)
            } else {
                console.error("Error", error.message);
            }
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") onSubmit()
    }

    return (
        <div className="search-container">
            <div className="search-bar">
                <input className="input-bubble"
                       placeholder="Stock Ticker"
                       onChange={e => handleInput(e.target.value)}
                       onKeyDown={handleKeyDown}
                       autoFocus/>
                <button className="search-button" onClick={onSubmit}>
                    <span className="search-text">SEARCH</span>
                </button>
            </div>
        </div>
    );
}

export default SearchBar;