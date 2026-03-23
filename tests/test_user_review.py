import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserReview from '../src/components/UserReview';

test('renders UserReview component', () => {
    const { getByPlaceholderText, getByText } = render(<UserReview />);
    const textarea = getByPlaceholderText('Write your review here...');
    const button = getByText('Submit');

    expect(textarea).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});

test('submits user review', () => {
    const { getByPlaceholderText, getByText } = render(<UserReview />);
    const textarea = getByPlaceholderText('Write your review here...');
    const button = getByText('Submit');

    fireEvent.change(textarea, { target: { value: 'Great portfolio!' } });
    fireEvent.click(button);

    expect(textarea.value).toBe(''); // Check if the textarea is cleared after submission
});