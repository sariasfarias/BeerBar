import axios from 'axios';


import { getOrder } from './Order';
import { OrderURL } from '../constants';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getOrder function', () => {
  beforeEach(() => { jest.clearAllMocks();
  });

  test('fetches item data successfully', async () => {
    const orderId = 123;
    const mockData = { id: orderId, title: 'Sample Item' };
    const response = { statusText: 'OK', data: mockData };
    mockedAxios.get.mockResolvedValue(response);

    const setData = jest.fn();
    const setError = jest.fn();
    await getOrder(orderId, setData, setError);

    expect(mockedAxios.get).toHaveBeenCalledWith(`${OrderURL}${orderId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    });
    expect(setData).toHaveBeenCalled();
  });

  test('handles error when fetching item data fails', async () => {
    const orderId = 123;
    mockedAxios.get.mockRejectedValue(new Error('Error fetching item data'));

    const setData = jest.fn();
    const setError = jest.fn();
    await getOrder(orderId, setData, setError);

    expect(mockedAxios.get).toHaveBeenCalledWith(`${OrderURL}${orderId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    });
    expect(setData).toHaveBeenCalledWith([]);
  });
});
