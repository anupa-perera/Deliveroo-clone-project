import { render, screen } from '@testing-library/react';
import FooterCard from './FooterCard';

const options = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
];

describe('FooterCard', () => {
  it('should render title', () => {
    render(<FooterCard title="title" options={options} />);

    const title = screen.getByText('title');
    expect(title).toBeTruthy();
  });

  it('should render options', () => {
    render(<FooterCard title="title" options={options} />);

    const home = screen.getByText('Home');
    expect(home).toBeTruthy();

    const about = screen.getByText('About');
    expect(about).toBeTruthy();
  });

  it('should render links', () => {
    render(<FooterCard title="title" options={options} />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink.getAttribute('href')).toBe('/');

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink.getAttribute('href')).toBe('/about');

    // const test = jest.spyon(FooterCard, '');
    // expect(test).toBeCalledTimes;
  });
});
