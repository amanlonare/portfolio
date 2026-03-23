import { handleReviewClick } from '../src/components/Resume';

describe('Review Button', () => {
  test('handleReviewClick opens the review link', () => {
    // Mock window.open to test the link opening
    const mockOpen = jest.fn();
    window.open = mockOpen;

    handleReviewClick();

    expect(mockOpen).toHaveBeenCalledWith('https://your-review-link.com', '_blank');
  });
});
