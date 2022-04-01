import { render, screen } from '@testing-library/react';
import DiveLog from './DiveLog';

describe('DiveLog', () => {
  it('shows a divenumber, city, country, locationname and date', () => {
    render(
      <DiveLog
        divenumber="1"
        city="Orlando"
        country="USA"
        location="DevilsDen"
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

  // it('in the document', () => {
  //   render(
  //     <DiveLog
  //       timeIn="07:45"
  //       timeOut="08:40"
  //       bottomTime="55min"
  //       maxDepth="21.4m"
  //       buddy="JonDoe"
  //     />
  //   );

  //   const buddy = screen.getByText('JonDoe', { exact: false });
  //   const maxDepth = screen.getByText('21.4m', { exact: false });
  //   const bottomTime = screen.getByText('55min', { exact: false });
  //   const timeOut = screen.getByText('08:40', { exact: false });
  //   const timeIn = screen.getByText('07:45', { exact: false });

  //   expect(buddy).toBeInTheDocument();
  //   expect(maxDepth).toBeInTheDocument();
  //   expect(bottomTime).toBeInTheDocument();
  //   expect(timeOut).toBeInTheDocument();
  //   expect(timeIn).toBeInTheDocument();
  // });
});
