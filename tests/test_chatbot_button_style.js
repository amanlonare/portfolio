const { JSDOM } = require('jsdom');

// Mock the implementation of the Chatbot component
const Chatbot = require('../src/components/Chatbot').default;

describe('Chatbot Button Style Verification', () => {
    let container;

    beforeAll(() => {
        const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
        global.window = dom.window;
        global.document = dom.window.document;
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    test('Button should have the correct Tailwind CSS classes', () => {
        const chatbot = Chatbot();
        container.appendChild(chatbot);

        const button = container.querySelector('button[aria-label="Open Chat"]');
        expect(button).toHaveClass('bg-[#0a0b10]');
        expect(button).toHaveClass('border-cyan-500/50');
        expect(button).toHaveClass('text-cyan-500');
    });

    console.log("Verification passed!");
    process.exit(0);
});
