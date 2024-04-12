import { render, screen } from '@testing-library/react';
import { ItemDetail } from './ItemDetail'; 
import { IItem } from '../../types'; 

describe('ItemDetail', () => {
  test('renders item details correctly', () => {
    const item: IItem = {
      name: 'Test Item',
      price_per_unit: 10,
      total: 50
    };

    render(<ItemDetail {...item} />);

    
    expect(screen.getByText(`${item.name}`)).toBeInTheDocument();
    expect(screen.getByText(`${item.price_per_unit}`)).toBeInTheDocument();
    expect(screen.getByText(`${item.total}`)).toBeInTheDocument();
  });
});
