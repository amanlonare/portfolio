import React from 'react';

const ReviewButton = () => {
    const handleReviewClick = () => {
        // Logic for handling review submission
        alert("Review submitted!");
    };

    return (
        <button
            onClick={handleReviewClick}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
            Submit Review
        </button>
    );
};

export default ReviewButton;
