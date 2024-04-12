import { render, screen } from '@testing-library/react';
import { OrderList } from './OrderList';

describe('OrderList', () => {
  test('renders OrderButton components correctly', () => {
    render(<OrderList />);

    const orderButton1 = screen.getByText('Order Information success');
    const orderButton2 = screen.getByText('Order Information fails');
    expect(orderButton1).toBeInTheDocument();
    expect(orderButton2).toBeInTheDocument();

  });
});
