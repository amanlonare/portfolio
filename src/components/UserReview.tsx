import React, { useState } from 'react';

const UserReview = () => {
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Review Submitted:', review);
        // Here you can add logic to send the review to a server or API
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

export default UserReview;