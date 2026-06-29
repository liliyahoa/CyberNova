// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CyberNova title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CyberNova/i);
    expect(titleElement).toBeInTheDocument();
});
