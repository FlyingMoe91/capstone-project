import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DiveLog from './DiveLog';

describe('DiveLog', () => {
  it('shows a divenumber, city, country, locationname and date', () => {
    render(
      <DiveLog
        divenumber="1"
        city="Orlando"
        country="USA"
        locationname="DevilsDen"
        date="25.06.2013"
      />
    );

    const city = screen.getByText('Orlando, USA', { exact: false });
    const country = screen.getByText('Orlando, USA', { exact: false });
    const location = screen.getByText('DevilsDen');
    const date = screen.getByText('25.06.2013');

    expect(city).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it('calls handleCardToggle when clicking on box', () => {
    const callback = jest.fn();
    render(<DiveLog onClick={callback} locationname="DevilsDen" />);

    const diveLogCard = screen.getByRole('button', { id: 'divelog' });
    userEvent.click(diveLogCard);

    expect(callback).toHaveBeenCalled();
  });
});
