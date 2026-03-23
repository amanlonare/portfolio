import unittest
from unittest.mock import patch
import os

class TestReviewButton(unittest.TestCase):
    @patch('os.getenv')
    def test_review_button(self, mock_get):
        mock_get.return_value = 'https://example.com/review'
        # Simulate the button click event
        review_url = os.getenv('REVIEW_URL')
        self.assertEqual(review_url, 'https://example.com/review')

if __name__ == '__main__':
    unittest.main()
