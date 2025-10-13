---
description: Verify WCAG 2.1 AA/AAA accessibility compliance
---

Accessibility compliance check for empathy-first portfolio:

## WCAG 2.1 Compliance Verification

### 1. Semantic HTML Structure
Check heading hierarchy (h1 → h2 → h3):
```bash
grep -n "<h[1-6]" index.html | head -20
```

### 2. Image Accessibility
Check for images without alt text:
```bash
grep -n '<img' index.html resume.html | grep -v 'alt=' || echo "✓ All images have alt attributes"
```

### 3. Form Labels
Check for inputs without labels:
```bash
grep -n '<input\|<textarea\|<select' index.html | head -10
```

### 4. ARIA Attributes
Check for ARIA usage:
```bash
grep -n 'aria-' index.html resume.html dynamic-resume.html | head -10
```

### 5. Language Attribute
Check html element has lang attribute:
```bash
grep -n '<html' index.html | grep 'lang=' || echo "⚠️ Missing language attribute"
```

### 6. Landmark Roles
Check for semantic landmarks:
```bash
grep -n 'role="navigation\|role="main\|role="banner\|<nav\|<main\|<header' index.html | head -10
```

### 7. Skip Navigation
Check for skip link:
```bash
grep -n 'skip-to-content\|skip-navigation\|skip to main' index.html || echo "⚠️ No skip navigation link"
```

### 8. Color Contrast
Check for inline styles that might affect contrast:
```bash
grep -n 'style.*color' index.html | head -10
```

### 9. Keyboard Navigation
Check for interactive elements:
```bash
grep -n 'tabindex\|role=' index.html | head -10
```

### 10. External Link Accessibility
Check external links for proper attributes:
```bash
grep -n 'target="_blank"' index.html | head -10
```

## Files to Review

Use Read tool to examine:
- index.html (philosophy section, forms, buttons)
- styles.css (color definitions, focus states)

Verify files exist:
```bash
ls -la index.html styles.css 2>/dev/null || echo "⚠️ Missing core files"
```

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
