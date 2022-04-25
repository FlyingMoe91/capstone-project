import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from './Menu';

const list = [{ location: 'orlando' }, { location: 'orlando' }];

describe('Menu', () => {
  it('renders a button', () => {
    render(
      <MemoryRouter>
        <Menu diveData={list} />
      </MemoryRouter>
    );

    const maxDepthButton = screen.getByRole('button', { name: /deepest/i });

    expect(maxDepthButton).toBeInTheDocument();
  });
});
