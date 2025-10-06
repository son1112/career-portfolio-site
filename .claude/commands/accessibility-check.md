---
description: Verify WCAG 2.1 AA/AAA accessibility compliance
---

Accessibility compliance check for empathy-first portfolio:

## WCAG 2.1 Compliance Verification

### 1. Semantic HTML Structure
Check heading hierarchy (h1 → h2 → h3):
!grep -n "<h[1-6]" index.html | head -20

### 2. Image Accessibility
Check for images without alt text:
!grep -n '<img' index.html resume.html | grep -v 'alt=' || echo "✓ All images have alt attributes"

### 3. Form Labels
Check for inputs without labels:
!grep -n '<input\|<textarea\|<select' index.html | head -10

### 4. ARIA Attributes
Check for ARIA usage:
!grep -n 'aria-' index.html resume.html dynamic-resume.html | head -10

### 5. Color Contrast
Check for inline styles that might affect contrast:
!grep -n 'style.*color' index.html | head -10

### 6. Keyboard Navigation
Check for interactive elements:
!grep -n 'tabindex\|role=' index.html | head -10

### 7. External Link Accessibility
Check external links for proper attributes:
!grep -n 'target="_blank"' index.html | head -10

## Files to Review

@index.html (philosophy section, forms, buttons)
@styles.css (color definitions, focus states)

## Accessibility Checklist

Verify:
- [ ] All images have descriptive alt text
- [ ] Form inputs have associated labels
- [ ] Heading hierarchy is logical (no skipped levels)
- [ ] Interactive elements have visible focus indicators
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text)
- [ ] ARIA landmarks used appropriately
- [ ] Keyboard navigation works for all interactions
- [ ] External links have `rel="noopener noreferrer"`

## Philosophy Section Review

The new philosophy section should exemplify accessibility-first architecture:
- Semantic HTML structure
- Proper ARIA landmarks
- Keyboard navigable
- Screen reader friendly
- Color contrast compliant

Provide accessibility score (0-100) and specific improvements needed.
