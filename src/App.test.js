import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/แนะนำการใช้งาน Git กับ ReactJS/i);
  expect(headerElement).toBeInTheDocument();
});
