import { render, screen } from '@testing-library/react';

import CreateDiver from './CreateDiver';

describe('CreateDiver', () => {
  it('renders four input fields and healine', () => {
    render(<CreateDiver />);

    const headline = screen.getByText('Enter your details');
    const inputName = screen.getByLabelText('name');
    const inputCertification = screen.getByLabelText('certification');
    const inputCertNr = screen.getByLabelText('cert #');
    const inputdate = screen.getByLabelText('date');
    const inputOrganization = screen.getByLabelText('organization');

    expect(headline).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputCertification).toBeInTheDocument();
    expect(inputCertNr).toBeInTheDocument();
    expect(inputdate).toBeInTheDocument();
    expect(inputOrganization).toBeInTheDocument();
  });
});
