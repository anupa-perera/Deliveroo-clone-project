import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header Component', () => {
  it('renders logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('Deliveroo Logo');
    expect(logo).toBeInTheDocument();
  });

  it('should navigate to login when not logged in', () => {
    const { getByAltText } = render(<Header />);
    fireEvent.click(getByAltText('Deliveroo Logo'));
    expect(window.location.pathname).toEqual('/login');
  });

  it('should render search bar on home page', () => {
    const { getByPlaceholderText } = render(<Header />);
    expect(
      getByPlaceholderText("Search Tossed - St Martin's Lane")
    ).toBeInTheDocument();
  });

  test('clicking signup button redirects to login', () => {
    const { getByText } = render(<Header />);
    const signupButton = getByText('Sign up or log in');

    fireEvent.click(signupButton);

    expect(window.location.href).toBe('/login');
  });
});
