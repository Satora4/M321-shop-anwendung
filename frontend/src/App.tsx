import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [data, setData] = useState<{ name: string }>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://host.docker.internal:8081/api');
                const result = await response.json();
                setData(result);
            } catch (e: any) {
                setError(e.message);
            }
        };

        fetchData()
            .finally(() => setLoading(false));
    });

    if (loading) return (
        <div className="App">
            <header className="App-header">
                <p>Loading ...</p>
            </header>
        </div>
    );
    if (error) return (
        <div className="App">
            <header className="App-header">
                <p>Error: {error}</p>
            </header>
        </div>
    );

    return (
        <div className="App">
            <header className="App-header">
                <p>{data?.name}</p>
            </header>
        </div>
    );
}

export default App;
