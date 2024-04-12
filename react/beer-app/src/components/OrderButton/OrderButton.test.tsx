import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OrderButton from './OrderButton'; 
import { IOrderButton } from '../../types'; 

describe('OrderButton', () => {
  test('renders button with title and order ID', () => {
    const orderButtonProps: IOrderButton = {
      title: 'Test Order',
      orderId: 123
    };

    render(<OrderButton {...orderButtonProps} />);

    const orderButton = screen.getByText(`${orderButtonProps.title}`);
    expect(orderButton).toBeInTheDocument();
  });
});
