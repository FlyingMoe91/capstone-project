import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import DeleteModal from './DeleteModal';

describe('DeleteModal', () => {
  it('shows a text an two buttons', () => {
    render(<DeleteModal />);

    const text = screen.getByText(
      'Are you sure you want to delete this divelog?'
    );
    const buttonCancel = screen.getByRole('button', { name: /no/i });
    const buttonConfirm = screen.getByRole('button', { name: /yes/i });

    expect(text).toBeInTheDocument();
    expect(buttonCancel).toBeInTheDocument();
    expect(buttonConfirm).toBeInTheDocument();
  });

  it('calls a function when clicking on the "no" button', () => {
    const callback = jest.fn();
    render(<DeleteModal onCancel={callback} />);

    const buttonCancel = screen.getByRole('button', { name: /no/i });

    userEvent.click(buttonCancel);

    expect(callback).toHaveBeenCalled();
  });

  it('calls a function when clicking on the "yes" button', () => {
    const callback = jest.fn();
    render(<DeleteModal onDelete={callback} />);

    const buttonDelete = screen.getByRole('button', { name: /yes/i });

    userEvent.click(buttonDelete);

    expect(callback).toHaveBeenCalled();
  });
});
