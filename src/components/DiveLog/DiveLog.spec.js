import { render, screen } from '@testing-library/react';
import DiveLog from './DiveLog';

describe('DiveLog', () => {
  it('shows a divenumber, city, country, locationname and date', () => {
    render(
      <DiveLog
        divenumber="1"
        location="Orlando"
        country="USA"
        divespot="DevilsDen"
        date="25.06.2013"
      />
    );

    const city = screen.getByText('Orlando', { exact: false });
    const country = screen.getByText('USA', { exact: false });
    const location = screen.getByText('DevilsDen');
    const date = screen.getByText('25.06.2013');

    expect(city).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it('renders the delete button and calls an onclick when clicking the delete button', () => {
    const callback = jest.fn();
    render(
      <DiveLog
        onDelete={callback}
        divenumber="1"
        city="Orlando"
        country="USA"
        location="DevilsDen"
        date="01.01.2000"
      />
    );

    const deleteButton = screen.getByRole('button', { name: /delete/i });

    expect(deleteButton).toBeInTheDocument();
  });
});
