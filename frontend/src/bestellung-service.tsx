// src/frontend/bestellungService.tsx
export async function createOrder(order: any) {
    const response = await fetch('http://host.docker.internal:8083/bestellung/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    return response.json();
}

export async function getAllOrders() {
    const response = await fetch('http://host.docker.internal:8083/bestellung/getAll');
    return response.json();
}

export async function getOrderById(id: number) {
    const response = await fetch(`http://host.docker.internal:8083/bestellung/${id}`);
    return response.json();
}

export async function updateOrder(id: number, order: any) {
    const response = await fetch(`http://host.docker.internal:8083/bestellung/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    return response.json();
}

export async function deleteOrder(id: number) {
    await fetch(`http://host.docker.internal:8083/bestellung/${id}`, {
        method: 'DELETE',
    });
}