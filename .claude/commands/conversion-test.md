# Conversion Test Command

Test affiliate conversion funnel integrity and optimization.

## Usage
`/conversion-test`

## What it does:
1. Uses Playwright to navigate through conversion funnel
2. Tests tools page → tool cards → affiliate redirects
3. Validates /go/[slug] redirect functionality  
4. Checks for broken affiliate links
5. Tests mobile conversion experience
6. Analyzes trust indicators and CTAs

## Test Flow:
1. **Tools Discovery**: Navigate to /tools page
2. **Tool Selection**: Click various tool cards
3. **Affiliate Flow**: Test /go/[slug] redirects
4. **Mobile Experience**: Repeat on mobile viewport
5. **Trust Signals**: Verify disclosure and trust indicators
6. **Error Handling**: Test broken/invalid affiliate links

## Validation Points:
- All affiliate links functional
- Clear disclosure before redirects
- Mobile-optimized tool cards
- Fast loading affiliate redirects
- Trust indicators visible and effective
- CTA buttons properly styled and accessible