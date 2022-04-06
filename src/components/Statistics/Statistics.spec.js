import { render, screen } from '@testing-library/react';
import Statistics from './Statistics';

describe('Statistics', () => {
  it('renders a button', () => {
    render(<Statistics />);

    const maxDepthButton = screen.getByRole('button', { name: /depth/i });

    expect(maxDepthButton).toBeInTheDocument();
  });
});
