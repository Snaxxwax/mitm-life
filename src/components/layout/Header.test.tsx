import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders the site navigation', () => {
    render(<Header />);

    // Check if navigation links are present
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Tools and Scripts')).toBeInTheDocument();
    expect(screen.getByText("Guides and How To's")).toBeInTheDocument();
    expect(screen.getByText('Research and Analysis')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('has accessible navigation structure', () => {
    render(<Header />);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label');
  });

  it('renders the logo/brand text', () => {
    render(<Header />);

    // Check if the brand name is displayed
    expect(screen.getByText('mitm.life')).toBeInTheDocument();
  });
});
