import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import EditDive from './EditDive';

const editDiveInfos = { image: '' };

describe('EditDive', () => {
  it('renders a form, two inputs and a button', () => {
    const mockCallback = jest.fn();
    render(<EditDive onClick={mockCallback} editDiveInfos={editDiveInfos} />);

    const form = screen.getByRole('form', { text: 'log new dive' });
    const locationInput = screen.getByLabelText('dive spot');
    const cityInput = screen.getByLabelText('location');

    expect(form).toBeInTheDocument();
    expect(locationInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
  });

  it('calls the submit function', () => {
    const callback = jest.fn();
    render(<EditDive onEditDive={callback} editDiveInfos={editDiveInfos} />);

    const button = screen.getByRole('button', { name: 'edit dive' });

    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(callback).toHaveBeenCalled();
  });
});
