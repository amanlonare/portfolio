import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserReview from '../src/components/UserReview';

test('renders UserReview component', () => {
    const { getByPlaceholderText, getByText } = render(<UserReview />);
    const input = getByPlaceholderText('Write your review here...');
    const button = getByText('Submit Review');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});

test('submits user review', () => {
    const { getByPlaceholderText, getByText } = render(<UserReview />);
    const input = getByPlaceholderText('Write your review here...');
    const button = getByText('Submit Review');

    fireEvent.change(input, { target: { value: 'Great portfolio!' } });
    fireEvent.click(button);

    expect(input.value).toBe('Great portfolio!');
});