import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Statistics from './Statistics';

const list = [{ location: 'orlando' }, { location: 'orlando' }];

describe('Statistics', () => {
  it('renders a button', () => {
    render(
      <MemoryRouter>
        <Statistics diveData={list} />
      </MemoryRouter>
    );

    const maxDepthButton = screen.getByRole('button', { name: /depth/i });

    expect(maxDepthButton).toBeInTheDocument();
  });
});
