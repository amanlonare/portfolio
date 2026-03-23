import unittest
from unittest.mock import patch

class TestReviewButton(unittest.TestCase):
    @patch('webbrowser.open')  # Mock the webbrowser.open method
    def test_handle_review_click(self, mock_open):
        # Simulate the button click
        handle_review_click()
        # Check if the correct URL was opened
        mock_open.assert_called_once_with('https://example.com/review')

if __name__ == '__main__':
    unittest.main()