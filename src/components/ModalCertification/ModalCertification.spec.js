import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import ModalCertification from './ModalCertification';

describe('ModalCertification', () => {
  it('calls two functions when clicking on the "cancel" and "save" button', () => {
    const cancel = jest.fn();
    const safe = jest.fn();
    render(<ModalCertification onCertModal={cancel} onCreate={safe} />);

    const buttonCancel = screen.getByRole('button', { name: /cancel/i });
    const buttonSafe = screen.getByRole('button', { name: /safe/i });

    userEvent.click(buttonCancel);
    userEvent.click(buttonSafe);

    expect(buttonCancel).toBeInTheDocument();
    expect(buttonSafe).toBeInTheDocument();
    expect(cancel).toHaveBeenCalled();
    expect(safe).toHaveBeenCalled();
  });
});