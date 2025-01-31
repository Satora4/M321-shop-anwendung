import './App.css';
import Produktkatalog from "./produktkatalog";
import {useState} from "react";
import Bewerten from "./bewerten";

function App() {
    const [bewertung, setBewertung] = useState<boolean>(false);

    if (bewertung) return (
        <div className="App">
            <Bewerten></Bewerten>
            <button onClick={() => setBewertung(!bewertung)}>Bewerten</button>
        </div>
    );

    return (
        <div className="App">
            <Produktkatalog></Produktkatalog>
            <button onClick={() => setBewertung(!bewertung)}>Bewerten</button>
        </div>
    );
}

export default App;
