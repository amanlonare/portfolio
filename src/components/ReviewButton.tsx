import React, { useState } from 'react';
import ReviewModal from './ReviewModal';

const ReviewButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleReviewClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button
                onClick={handleReviewClick}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Submit Review
            </button>
            {isModalOpen && <ReviewModal onClose={closeModal} />}
        </>
    );
};

export default ReviewButton;
