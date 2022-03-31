import { render, screen } from '@testing-library/react';
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
    render(
      <DiveLog
        timeIn="07:45"
        timeOut="08:40"
        bottomTime="55min"
        maxDepth="21.4m"
        buddyName="JonDoe"
      />
    );

    const buddyName = screen.getByRole('listitem');
    const maxDepth = screen.getByRole('listitem');
    const bottomTime = screen.getByRole('listitem');
    const timeOut = screen.getByRole('listitem');
    const timeIn = screen.getByRole('listitem');

    expect(buddyName).toBeInTheDocument('JonDoe');
    expect(maxDepth).toBeInTheDocument('21.4m');
    expect(bottomTime).toBeInTheDocument('55min');
    expect(timeOut).toBeInTheDocument('08:40');
    expect(timeIn).toBeInTheDocument('07:45');
  });
});
