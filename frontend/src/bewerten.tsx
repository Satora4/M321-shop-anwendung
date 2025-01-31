import './App.css';
import { useEffect, useState } from "react";

type Review = {
    id?: number;
    productId: number;
    author: string;
    rating: number;
    comment: string;
};

function Bewerten() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [newReview, setNewReview] = useState<Review>({
        productId: 1,
        author: "",
        rating: 5,
        comment: "",
    });
    const [error, setError] = useState<string | null>(null);

    // Bewertungen für ein Produkt abrufen
    useEffect(() => {
        fetch(`http://host.docker.internal:8083/reviews/product/${1}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched reviews:", data);  // Log the data
                if (Array.isArray(data)) {
                    setReviews(data);
                } else {
                    console.error("Expected an array of reviews");
                    setError("Failed to load reviews. Please try again later.");
                }
            })
            .catch((error) => {
                console.error("Fehler beim Laden der Bewertungen:", error);
                setError("Failed to load reviews. Please try again later.");
            });
    }, []);  // Add dependency array to run once on mount

    // Neue Bewertung hinzufügen
    const addReview = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);  // Clear any previous error
        console.log("Submitting review:", newReview);  // Log the submitted review
        try {
            const response = await fetch("http://host.docker.internal:8083/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newReview),
            });

            if (response.ok) {
                const addedReview = await response.json();
                console.log("Review added:", addedReview);  // Log the added review
                setReviews([...reviews, addedReview]); // Liste mit neuer Bewertung aktualisieren
                setNewReview({ productId: 1, author: "", rating: 5, comment: "" }); // Formular zurücksetzen
            } else {
                console.error("Fehler beim Hinzufügen der Bewertung");
                setError("Failed to add review. Please try again later.");
            }
        } catch (error) {
            console.error("Fehler beim Hinzufügen der Bewertung:", error);
            setError("Failed to add review. Please try again later.");
        }
    };

    return (
        <div>
            <h2>Bewertungen für Produkt</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}

            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.author}</strong> ({review.rating}/5) <br />
                        {review.comment}
                    </li>
                ))}
            </ul>

            <form onSubmit={addReview}>
                <input
                    type="text"
                    placeholder="Dein Name"
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    required
                />
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    required
                />
                <textarea
                    placeholder="Dein Kommentar"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    required
                ></textarea>
                <button type="submit">Bewertung abgeben</button>
            </form>
        </div>
    );
}

export default Bewerten;