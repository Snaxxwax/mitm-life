# Responsive Test Command

Test responsive behavior across all breakpoints with visual verification.

## Usage
`/responsive-test [page-path]`

## What it does:
1. Uses Playwright to navigate to specified page
2. Tests at mobile (375px), tablet (768px), desktop (1440px) breakpoints  
3. Captures screenshots for visual comparison
4. Checks for horizontal scroll issues
5. Validates touch target sizes (min 44px)
6. Tests interactive elements at each breakpoint

## Examples:
- `/responsive-test /` - Test homepage responsiveness
- `/responsive-test /tools` - Test tools page responsiveness
- `/responsive-test /about` - Test about page responsiveness

## Validation Checks:
- No horizontal scrolling on mobile
- Touch targets minimum 44px
- Text readable without zoom (16px+ base)
- Navigation accessible at all breakpoints
- Images/media properly scaled
- Forms usable on mobile devices