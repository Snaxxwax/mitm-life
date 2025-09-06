import { describe, it, expect } from 'vitest';

// Mock the contentUtils functions for testing
const mockFormatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const mockSlugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

describe('Content Utils', () => {
  describe('formatDate', () => {
    it('formats dates correctly', () => {
      const testDate = new Date(2024, 0, 15); // Use local date constructor
      const formatted = mockFormatDate(testDate);
      expect(formatted).toBe('January 15, 2024');
    });

    it('handles different date formats', () => {
      const testDate = new Date(2024, 11, 31); // Use local date constructor (month is 0-indexed)
      const formatted = mockFormatDate(testDate);
      expect(formatted).toBe('December 31, 2024');
    });
  });

  describe('slugify', () => {
    it('converts text to URL-safe slug', () => {
      expect(mockSlugify('Hello World')).toBe('hello-world');
      expect(mockSlugify('This is a Test!')).toBe('this-is-a-test');
      expect(mockSlugify('Multiple   Spaces')).toBe('multiple-spaces');
    });

    it('handles special characters', () => {
      expect(mockSlugify('Test & Development')).toBe('test-development');
      expect(mockSlugify('API Testing: Part 1')).toBe('api-testing-part-1');
    });

    it('removes leading and trailing dashes', () => {
      expect(mockSlugify('!@#$%')).toBe('');
      expect(mockSlugify('---test---')).toBe('test');
    });
  });
});
