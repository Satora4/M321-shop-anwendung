import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [produktkatalog, setProduktkatalog] = useState<{ name: string }>();
    const [warenkorb, setWarenkorb] = useState<{ product: string }>();
    const [bestellung, setBestellung] = useState<{ bestellung: string }>()
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const produktkatalog = await fetch('http://host.docker.internal:8081/produktkatalog/getAll');
                setProduktkatalog(await produktkatalog.json());

                const warenkorb = await fetch('http://host.docker.internal:8081/warenkorb/getAll');
                setWarenkorb(await warenkorb.json());

                const bestellung = await fetch('http://host.docker.internal:8082/bestellung/getAll');
                setBestellung(await bestellung.json());
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
                <p>{produktkatalog?.name}</p>
                <p>{warenkorb?.product}</p>
                <p>{bestellung?.bestellung}</p>
            </header>
        </div>
    );
}

export default App;
