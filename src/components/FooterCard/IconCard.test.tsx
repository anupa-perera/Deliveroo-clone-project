import { render, screen } from '@testing-library/react';
import IconCard from './IconCard';

describe('IconCard', () => {
  it('renders typography with correct text', () => {
    render(<IconCard />);
    const text = screen.getByText(/Take Deliveroo with you/i);
    expect(text).toBeInTheDocument();
  });

  it('renders two image links', () => {
    render(<IconCard />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  test('renders Apple and Google images with correct src', () => {
    render(<IconCard />);
    const appleLink = screen.getByRole('link', { name: /apple/i });
    expect(appleLink).toHaveAttribute('href', 'your-link-for-png-image');
    expect(appleLink.firstElementChild).toHaveAttribute('src', 'Apple.jpg');
  });
});
