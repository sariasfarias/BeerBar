import { act, render, screen, waitFor } from '@testing-library/react';
import { IOrderDetail, IOrder } from '../../types';
import { OrderDetail } from './OrderDetail';
import axios from 'axios';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('OrderDetail', () => {
  beforeEach(() => { jest.clearAllMocks();});
  test('renders order details correctly', async () => {
    
    const orderDetailProps: IOrderDetail = {
      orderId: 123
    };

    const mockOrderData: IOrder = {
      created: '2024-04-10',
      paid: true,
      subtotal: '100',
      discounts: '10',
      items: [{ name: 'Corona', price_per_unit: 10, total: 15 }],
      rounds: [{ created: '2024-04-12', items: [{ name: 'Item 1', quantity: 1 }] }]
    };

    mockedAxios.get.mockResolvedValue({data: mockOrderData, statusText: 'OK'});
    render(<OrderDetail {...orderDetailProps} />);
    
    await waitFor(() => {
        
        expect(screen.getByText(`${mockOrderData.created}`)).toBeInTheDocument();
        expect(screen.getByText('YES')).toBeInTheDocument();
        expect(screen.getByText(`$ ${mockOrderData.subtotal}`)).toBeInTheDocument();
        expect(screen.getByText(`$ ${mockOrderData.discounts}`)).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('Rounds:')).toBeInTheDocument();
    });
    
  });

  test('renders error message for empty order', async () => {
    const orderDetailProps: IOrderDetail = {
      orderId: 123
    };

    mockedAxios.get.mockRejectedValueOnce({}); 
    act(() => {
        render(<OrderDetail {...orderDetailProps} />);
    });

    await waitFor(() => {
        expect(screen.getByText('Ups empty order!')).toBeInTheDocument();
    });
    
  });
});
