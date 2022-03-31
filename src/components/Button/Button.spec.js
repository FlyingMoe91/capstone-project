import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import Button from './Button.js';

describe('Button', () => {
  it('shows a button and calls callback function on click', () => {
    const mockCallback = jest.fn();
    render(<Button onClick={mockCallback} />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(mockCallback).toHaveBeenCalled();
  });
});
