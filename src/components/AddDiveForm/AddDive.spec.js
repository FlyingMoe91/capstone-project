import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import AddDive from './AddDive';

describe('AddDive', () => {
  it('renders a form, two inputs and a button', () => {
    const mockCallback = jest.fn();
    render(<AddDive onClick={mockCallback} />);

    const form = screen.getByRole('form', { text: 'log new dive' });
    const locationInput = screen.getByLabelText('dive spot');
    const cityInput = screen.getByLabelText('location');
    const buttonSubmit = screen.getByRole('button', { name: /log dive/i });

    expect(form).toBeInTheDocument();
    expect(locationInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(buttonSubmit).toBeInTheDocument();
  });

  it('calls the submit function', () => {
    const callback = jest.fn();
    render(<AddDive onCreate={callback} />);

    const button = screen.getByRole('button', { name: 'log dive' });

    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(callback).toHaveBeenCalled();
  });
});
