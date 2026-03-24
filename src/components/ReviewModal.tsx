import React from 'react';

const ReviewModal = ({ onClose }: { onClose: () => void }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic for handling review submission
        alert("Review submitted!");
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-lg font-bold mb-4">Submit Your Review</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                        placeholder="Write your review here..."
                        required
                    />
                    <div className="mt-4 flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;
