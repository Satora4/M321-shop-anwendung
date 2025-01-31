import React, {useEffect, useState} from 'react';
import './App.css';
import { getAllOrders, updateOrder } from './bestellung-service';

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
    const [orders, setOrders] = useState<any[]>([]);
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

                const ordersData = await getAllOrders();
                setOrders(ordersData);

            } catch (e: any) {
                setError(e.message);
            }
        };

        fetchData()
            .finally(() => setLoading(false));
    }, []);

    function getProduct(id:number): Product | undefined {
        return products.find((product) => product.id === id);
    }

    const handleUpdateOrderStatus = async (orderId: number, status: string) => {
        try {
            const updatedOrder = await updateOrder(orderId, { orderStatus: status });
            setOrders(orders.map(order => order.id === orderId ? updatedOrder : order));
        } catch (error) {
            console.error("Failed to update order status:", error);
        }
    };

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

            <h2>Bestellungen</h2>
            <ul style={{listStyleType: "none", padding: 0, margin: 0}}>
                {orders.map((order) => (
                    <li key={order.id}>
                        Bestellung ID: {order.id} - Status: {order.orderStatus}
                        <button onClick={() => handleUpdateOrderStatus(order.id, 'COMPLETED')}>Mark as Completed</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Produktkatalog;