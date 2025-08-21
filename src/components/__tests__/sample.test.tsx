/**
 * Sample test file for mitm.life project
 * This ensures the testing infrastructure is properly configured
 */

import { render, screen } from '@testing-library/react';

// Mock component for testing
const SampleComponent = ({ title }: { title: string }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Welcome to mitm.life OSINT Blog</p>
    </div>
  );
};

describe('Sample Component Tests', () => {
  test('renders title correctly', () => {
    render(<SampleComponent title="OSINT Research" />);
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('OSINT Research');
    expect(screen.getByText('Welcome to mitm.life OSINT Blog')).toBeInTheDocument();
  });

  test('handles different titles', () => {
    render(<SampleComponent title="Cybersecurity Tools" />);
    
    expect(screen.getByRole('heading')).toHaveTextContent('Cybersecurity Tools');
  });
});

describe('Environment Tests', () => {
  test('NODE_ENV is set for tests', () => {
    expect(process.env.NODE_ENV).toBe('test');
  });

  test('testing utilities are available', () => {
    expect(screen).toBeDefined();
    expect(render).toBeDefined();
  });
});

// Test for basic React functionality
describe('React Integration', () => {
  test('components can be rendered without errors', () => {
    const { container } = render(<div>Test Content</div>);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('text content is accessible', () => {
    render(<div>Accessible content</div>);
    expect(screen.getByText('Accessible content')).toBeInTheDocument();
  });
});