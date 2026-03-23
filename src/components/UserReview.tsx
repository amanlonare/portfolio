import React, { useState } from 'react';

const UserReview = () => {
    const [review, setReview] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the review submission logic here
        console.log('User Review Submitted:', review);
        setReview(''); // Clear the input after submission
    };

    return (
        <div>
            <h2>User Review</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your review here..."
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserReview;