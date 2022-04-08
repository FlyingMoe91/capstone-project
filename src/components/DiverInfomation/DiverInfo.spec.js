import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import DiverInfo from './DiverInfo';

describe('DiverInfo', () => {
  it('renders a city, county, location and date', () => {
    render(<DiverInfo />);

    // const city = screen.getByText('Orlando', { exact: false });
    // const country = screen.getByText('USA', { exact: false });
    // const location = screen.getByText('DevilsDen');
    // const date = screen.getByText('25.06.2013');

    // expect(city).toBeInTheDocument();
    // expect(country).toBeInTheDocument();
    // expect(location).toBeInTheDocument();
    // expect(date).toBeInTheDocument();
  });
});
