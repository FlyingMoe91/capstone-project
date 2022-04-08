import { render, screen } from '@testing-library/react';

import DiverInfo from './DiverInfo';

describe('DiverInfo', () => {
  it('renders a five inputs', () => {
    render(
      <DiverInfo
        name="Jon"
        certification="AOWD"
        certnr="1234"
        date="01.01.2000"
        organization="Padi"
      />
    );

    const name = screen.getByText('Jon');
    const certification = screen.getByText('AOWD');
    const certnr = screen.getByText('1234');
    const date = screen.getByText('01.01.2000');
    const organization = screen.getByText('Padi');

    expect(name).toBeInTheDocument();
    expect(certification).toBeInTheDocument();
    expect(certnr).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(organization).toBeInTheDocument();
  });
});
