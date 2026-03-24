import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReviewButton from './ReviewButton';

describe('ReviewButton', () => {
    test('renders button and responds to click', () => {
        render(<ReviewButton />);

        // Check if the button is rendered
        const buttonElement = screen.getByText(/Submit Review/i);
        expect(buttonElement).toBeInTheDocument();

        // Simulate a click event
        fireEvent.click(buttonElement);

        // Check if the modal opens after clicking the button
        const modalElement = screen.getByRole('dialog'); // Assuming the modal has a role of 'dialog'
        expect(modalElement).toBeInTheDocument();
    });
});
