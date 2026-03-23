const handleReviewClick = () => {
  window.open('https://your-review-link.com', '_blank');
};

export const Resume = () => {
  // ... existing code ...
  return (
    <div>
      {/* ... existing code ... */}
      <button
        onClick={handleReviewClick}
        className="mt-8 p-3 bg-blue-500 text-white rounded"
      >
        Leave a Review
      </button>
      {/* ... existing code ... */}
    </div>
  );
};