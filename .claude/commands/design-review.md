# Design Review Command

Conduct a comprehensive design review of the current UI state using the design-reviewer sub-agent.

## Usage
`/design-review [component-path]`

## What it does:
1. Launches the design-reviewer sub-agent
2. Screenshots current state across all breakpoints
3. Analyzes component patterns and consistency
4. Tests responsive behavior and accessibility
5. Validates conversion funnel integrity
6. Generates detailed report with specific recommendations

## Examples:
- `/design-review` - Full site review
- `/design-review src/components/tools/` - Tools section review  
- `/design-review src/app/tools/page.tsx` - Tools page review

## Agent Instructions:
Use the design-reviewer agent to:
- Navigate with Playwright to relevant pages
- Take screenshots at 375px, 768px, and 1440px breakpoints
- Test both dark and light themes
- Check console for errors
- Validate against design principles in CLAUDE.md
- Provide actionable recommendations with file:line references