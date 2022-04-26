import { render, screen } from '@testing-library/react';
import StatisticsModal from './StatisticsModal';

const deepestDive = [
  {
    location: 'Orlando',
    country: 'USA',
    divespot: 'DevilsDen',
    date: '25.06.2013',
    _id: '1234',
  },
];

describe('StatisticsModal', () => {
  it('renders a divespot, county, location and date', () => {
    render(<StatisticsModal deepestDive={deepestDive} />);

    const location = screen.getByText('Orlando');
    const country = screen.getByText('USA');
    const divespot = screen.getByText('DevilsDen');
    const date = screen.getByText('25.06.2013');

    expect(location).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(divespot).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
