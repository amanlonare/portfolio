import unittest
from unittest.mock import patch

class TestReviewSubmission(unittest.TestCase):
    @patch('builtins.print')  # Mock print to capture output
    def test_review_submission(self, mock_print):
        # Simulate the review submission
        review = 'This is a test review.'
        # Call the handleSubmit function directly (assuming it's imported)
        handleSubmit(review)
        # Check if the review was printed
        mock_print.assert_called_with('Review submitted:', review)

if __name__ == '__main__':
    unittest.main()
