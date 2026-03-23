import sys
from unittest.mock import MagicMock
sys.path.insert(0, '.')

# Step 1: Mock ALL third-party modules BEFORE importing your code
sys.modules['react'] = MagicMock()

# Step 2: NOW import implementation using ABSOLUTE path
from components.ReviewForm import ReviewForm

# Step 3: STRUCTURAL VERIFICATION 
assert ReviewForm is not None
assert hasattr(ReviewForm, 'handleSubmit'), "Missing handleSubmit method"
assert hasattr(ReviewForm, 'render'), "Missing render method"
print("Structural verification passed!")