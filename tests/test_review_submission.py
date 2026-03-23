import unittest
from unittest.mock import patch

class TestReviewSubmission(unittest.TestCase):
    @patch('builtins.print')  # Mock print to capture output
    def test_review_submission(self, mock_print):
        review = 'This is a test review.'
        # Simulate the submission of the review
        print('Review submitted:', review)
        # Check if the print function was called with the correct argument
        mock_print.assert_called_once_with('Review submitted:', review)

if __name__ == '__main__':
    unittest.main()
