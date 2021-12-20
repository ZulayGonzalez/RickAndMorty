import { render, screen } from '@testing-library/react';
import Detalles from './Components/Detalles';

test('renders learn react link', () => {
  render(<Detalles />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
