import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import DiverInfo from './DiverInfo';

const diverInfo = {
  name: 'Jon',
  certification: 'AOWD',
  cert_nr: '1234',
  date: '01.01.2000',
  organization: 'Padi',
};
describe('DiverInfo', () => {
  it('renders five inputs', () => {
    render(<DiverInfo diverInfo={diverInfo} />);

    const name = screen.getByText('Jon');
    const certification = screen.getByText(/AOWD/i);
    const certnr = screen.getByText('1234');
    const organization = screen.getByText(/Padi/i);

    expect(name).toBeInTheDocument();
    expect(certification).toBeInTheDocument();
    expect(certnr).toBeInTheDocument();
    expect(organization).toBeInTheDocument();
  });

  it('renders a button and calls a callback', () => {
    const callback = jest.fn();
    render(<DiverInfo diverInfo={diverInfo} onEditDiver={callback} />);

    const editButton = screen.getByRole('button', {
      name: /edit diver information/i,
    });

    userEvent.click(editButton);

    expect(editButton).toBeInTheDocument();
    expect(callback).toHaveBeenCalled();
  });
});
