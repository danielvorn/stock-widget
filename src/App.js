import Frame from "./Frame";
import SearchBar from "./SearchBar";
import {useState} from "react";

function App() {

    const [stock, setStock] = useState([])
    const [frame, setFrame] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className="App">
            <SearchBar setFrame={setFrame} setStock={setStock} setError={setError}/>
            <Frame frame={frame} stock={stock} error={error}/>
        </div>
    );
}

export default App;
