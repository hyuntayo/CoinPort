// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinPort title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinPort/i);
    expect(titleElement).toBeInTheDocument();
});
