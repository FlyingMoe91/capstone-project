import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import DeleteModal from './DeleteModal';

describe('DeleteModal', () => {
  it('shows a text an two buttons', () => {
    render(<DeleteModal />);

    const text = screen.getByText(
      'Are you sure you want to delete this divelog?'
    );
    const buttonCancel = screen.getByRole('button', { name: /cancel/i });
    const buttonConfirm = screen.getByRole('button', { name: /confirm/i });

    expect(text).toBeInTheDocument();
    expect(buttonCancel).toBeInTheDocument();
    expect(buttonConfirm).toBeInTheDocument();
  });

  it('calls a function when clicking on the buttons', () => {
    const callback = jest.fn();
    render(<DeleteModal onKeepConfirm={callback} />);

    const buttonCancel = screen.getByRole('button', { name: /cancel/i });

    userEvent.click(buttonCancel);

    expect(callback).toHaveBeenCalled();
  });
});
