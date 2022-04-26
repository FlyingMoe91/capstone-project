import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import CertificationModal from './CertificationModal';

describe('CertificationModal', () => {
  it('calls two functions when clicking on the "cancel" and "save" button', () => {
    const cancel = jest.fn();
    const safe = jest.fn();
    render(<CertificationModal onCertModal={cancel} onCreate={safe} />);

    const buttonCancel = screen.getByRole('button', { name: /cancel/i });
    const buttonSafe = screen.getByRole('button', { name: /save/i });

    userEvent.click(buttonCancel);
    userEvent.click(buttonSafe);

    expect(buttonCancel).toBeInTheDocument();
    expect(buttonSafe).toBeInTheDocument();
    expect(cancel).toHaveBeenCalled();
    expect(safe).toHaveBeenCalled();
  });
});
