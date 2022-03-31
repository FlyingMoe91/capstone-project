import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import AddDive from './AddDive';

describe('AddDive', () => {
  it('renders a form, two inputs and a button', () => {
    const mockCallback = jest.fn();
    render(<AddDive onClick={mockCallback} />);

    const form = screen.getByRole('form', { text: 'log new dive' });
    const locationInput = screen.getByLabelText('location');
    const cityInput = screen.getByLabelText('city');
    const buttonSubmit = screen.getByRole('button', { name: /log dive/i });

    expect(form).toBeInTheDocument();
    expect(locationInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(buttonSubmit).toBeInTheDocument();
  });

  it('does not call submit without required inputs filled out', () => {
    const onCreateDive = jest.fn();
    render(<AddDive onCreateDive={onCreateDive} />);

    const button = screen.getByRole('button', { name: /log dive/i });

    userEvent.click(button);

    expect(onCreateDive).toHaveBeenCalled();
  });
});
