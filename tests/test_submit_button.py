import unittest
from unittest.mock import patch

class TestSubmitButton(unittest.TestCase):
    @patch('src.App')  # Mock the App component
    def test_submit_button_exists(self, mock_app):
        # Simulate rendering the App component
        mock_app.render()
        # Check if the button is present
        self.assertIn('Submit Review', mock_app.output)

if __name__ == '__main__':
    unittest.main()