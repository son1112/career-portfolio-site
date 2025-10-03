---
description: Run comprehensive security audit on portfolio files
---

Perform security audit on career portfolio:

## Security Checklist

### 1. XSS Prevention
- Check for `innerHTML` with unsanitized data
- Verify no template literal injection vulnerabilities
- Ensure all user input is sanitized

**Files to scan:**
!grep -rn "innerHTML" --include="*.js" --include="*.html" .

### 2. CSP Compliance
- Find inline event handlers (onclick, onload, etc.)
- Check for inline styles that could be extracted
- Verify Content Security Policy readiness

**Files to scan:**
!grep -rn "onclick\|onload\|onerror" --include="*.html" .

### 3. External Link Security
- Verify all `target="_blank"` have `rel="noopener noreferrer"`
- Check for insecure external resources

**Files to scan:**
!grep -rn 'target="_blank"' --include="*.html" .

### 4. Sensitive Data Exposure
- Check for API keys, tokens, credentials
- Verify `.env` patterns
- Check for exposed personal information

**Files to scan:**
!grep -rn "API_KEY\|TOKEN\|PASSWORD\|SECRET" --include="*.js" --include="*.html" .

### 5. Dependency Security
- List all external dependencies
- Check for CDN integrity attributes

**Analysis:**
@index.html
@script.js
@resume-builder.js

Provide security score (0-100) and prioritized recommendations.
