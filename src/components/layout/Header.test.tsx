import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders the site navigation', () => {
    render(<Header />);
    
    // Check if navigation links are present
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
    expect(screen.getByText('Guides')).toBeInTheDocument();
    expect(screen.getByText('Research')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('has accessible navigation structure', () => {
    render(<Header />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label');
  });

  it('renders the logo/brand link', () => {
    render(<Header />);
    
    // Check if there's a link to home page
    const homeLink = screen.getByRole('link', { name: /mitm\.life/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });
});