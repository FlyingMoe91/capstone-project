import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import StatisticsModal from './StatisticsModal';

describe('StatisticsModal', () => {
  it('renders a city, county, location and date', () => {
    render(
      <StatisticsModal
        location="Orlando"
        country="USA"
        divespot="DevilsDen"
        date="25.06.2013"
      />
    );

    const location = screen.getByText('Orlando');
    const country = screen.getByText('USA');
    const divespot = screen.getByText('DevilsDen');
    const date = screen.getByText('25.06.2013');

    expect(location).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(divespot).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it('calls a function when clicking on the "x" button', () => {
    const callback = jest.fn();
    render(<StatisticsModal onStatisticsToggle={callback} />);

    const buttonCancel = screen.getByRole('button', { name: /close/i });

    userEvent.click(buttonCancel);

    expect(callback).toHaveBeenCalled();
  });
});
