import React, { useState } from 'react';

const ReviewForm = () => {
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle review submission logic here
        console.log('Review submitted:', review);
        setReview(''); // Clear the input after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review here..."
                required
            />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;