import './App.css';
import Frame from "./Frame";
import SearchBar from "./SearchBar";
import {useState} from "react";

function App() {

    const [frame, setFrame] = useState(false);

    return (
        <div className="App">
            <SearchBar setFrame={setFrame}/>
            <Frame frame={frame}/>
        </div>
    );
}

export default App;
