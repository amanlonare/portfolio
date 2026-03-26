import { render, screen, fireEvent } from '@testing-library/react';
import Chatbot from '../src/components/Chatbot';

test('submits the form when the button is clicked', async () => {
    render(<Chatbot />);

    const input = screen.getByPlaceholderText(/initiate prompt.../i);
    const button = screen.getByRole('button', { name: /send message/i });

    // Simulate user typing a message
    fireEvent.change(input, { target: { value: 'Hello, AI!' } });

    // Simulate button click
    fireEvent.click(button);

    // Check if the input is cleared after submission
    expect(input.value).toBe('');

    // Check if the new message appears in the chat
    const userMessage = await screen.findByText(/Hello, AI!/i);
    expect(userMessage).toBeInTheDocument();
});
