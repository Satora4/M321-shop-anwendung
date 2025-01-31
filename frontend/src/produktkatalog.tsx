import React, {useEffect, useState} from 'react';
import './App.css';

/**
 * auskommentierten Code führt noch zu Fehlern.
 */

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
};

type chartItem = {
    productId: number;
    quantity: number;
};

function Produktkatalog() {
    const [products, setProducts] = useState<Product[]>([]);
    // const [chartItem, setChartItem] = useState<chartItem[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch('http://host.docker.internal:8091/products')
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setProducts(data);
                    });

                // await fetch('http://host.docker.internal:8091/cart')
                //     .then((response) => {
                //         if (!response.ok) {
                //             throw new Error(`HTTP error! Status: ${response.status}`);
                //         }
                //         return response.json();
                //     })
                //     .then((data) => {
                //         setChartItem(data);
                //     });
            } catch (e: any) {
                setError(e.message);
            }
        };

        fetchData()
            .finally(() => setLoading(false));
    });

    function getProduct(id:number): Product | undefined {
        return products.find((product) => product.id === id);
    }

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
            <h2>Produktkatalog</h2>
            <ul style={{listStyleType: "none", padding: 0, margin: 0}}>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.description} - {product.price}CHF - {product.stock} Stück
                    </li>
                ))}
            </ul>
            {/*<h2>Warenkorb</h2>*/}
            {/*<ul style={{listStyleType: "none", padding: 0, margin: 0}}>*/}
            {/*    {chartItem?.map((item) => (*/}
            {/*        <li key={item.productId}>*/}
            {/*            {getProduct(item.productId)?.name} - {getProduct(item.productId)?.description} - {getProduct(item.productId)?.price}CHF - {getProduct(item.productId)?.stock} Stück*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    );
}

export default Produktkatalog;
