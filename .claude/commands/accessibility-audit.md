# Accessibility Audit Command

Conduct comprehensive accessibility testing for WCAG 2.1 AA compliance.

## Usage
`/accessibility-audit [page-path]`

## What it does:
1. Uses Playwright to navigate and test accessibility
2. Checks keyboard navigation flow
3. Tests screen reader compatibility
4. Validates color contrast ratios
5. Checks focus indicators and tab order
6. Tests with assistive technologies

## Examples:
- `/accessibility-audit /` - Audit homepage
- `/accessibility-audit /tools` - Audit tools page
- `/accessibility-audit` - Full site audit

## Test Areas:
### Keyboard Navigation
- Tab order logical and complete
- All interactive elements focusable
- Skip links present and functional
- Focus indicators visible

### Screen Reader
- Proper heading hierarchy (h1-h6)
- Alt text for images
- Form labels and descriptions
- ARIA attributes where needed

### Visual Accessibility  
- Color contrast ratios (4.5:1 normal, 3:1 large text)
- No color-only information conveyance
- Text resizable to 200% without loss
- Focus indicators meet contrast requirements

### Interactive Elements
- Form error messages accessible
- Button purposes clear
- Link text descriptive
- Modal/dialog accessibility