import { render, screen } from '@testing-library/react';

import CreateDiver from './CreateDiver';

const diverInfo = [
  {
    name: 'Jon',
    certification: 'AOWD',
    cert_nr: '1234',
    date: '01.01.2000',
    organization: 'Padi',
    _id: 'tvicVpoBMNbgxQiD97BIH',
  },
];

describe('CreateDiver', () => {
  it('renders four input fields and healine', () => {
    render(<CreateDiver diverInfo={diverInfo} />);

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
