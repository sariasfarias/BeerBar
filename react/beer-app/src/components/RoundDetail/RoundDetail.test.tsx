import { render, screen } from '@testing-library/react';
import {RoundDetail} from './RoundDetail'; 
import { IRoundItemInformation } from '../../types'; 

describe('RoundDetail', () => {
  test('renders round details correctly', () => {
    const roundDetailProps: IRoundItemInformation = {
      created: '2024-04-12',
      index: 1,
      items: [{ name: 'Corona', quantity: 2 }]
    };

    render(<RoundDetail {...roundDetailProps} />);

    expect(screen.getByText(`Round #${roundDetailProps.index}`)).toBeInTheDocument();
    expect(screen.getByText(`${roundDetailProps.created}`)).toBeInTheDocument();
  });
});
