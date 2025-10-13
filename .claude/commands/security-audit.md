---
description: Run comprehensive security audit on portfolio files
---

Perform security audit on career portfolio:

## Security Checklist

### 1. XSS Prevention
- Check for `innerHTML` with unsanitized data
- Verify no template literal injection vulnerabilities
- Ensure all user input is sanitized

**Scan with:**
```bash
grep -rn "innerHTML" --include="*.js" --include="*.html" .
```

### 2. CSP Compliance
- Find inline event handlers (onclick, onload, etc.)
- Check for inline styles that could be extracted
- Verify Content Security Policy readiness

**Scan with:**
```bash
grep -rn "onclick\|onload\|onerror" --include="*.html" .
```

### 3. External Link Security
- Verify all `target="_blank"` have `rel="noopener noreferrer"`
- Check for insecure external resources
- Verify HTTPS for all external resources
- Check for Subresource Integrity (SRI) on CDN resources

**Scan with:**
```bash
grep -rn 'target="_blank"' --include="*.html" .
grep -rn 'http://' --include="*.html" .
grep -rn '<script src="https://' --include="*.html" . | grep -v 'integrity='
```

### 4. Sensitive Data Exposure
- Check for API keys, tokens, credentials
- Verify `.env` patterns
- Check for exposed personal information

**Scan with:**
```bash
grep -rn "API_KEY\|TOKEN\|PASSWORD\|SECRET" --include="*.js" --include="*.html" .
```

### 5. Dependency Security
- List all external dependencies
- Check for CDN integrity attributes

**Review these files for external dependencies:**
Use the Read tool to examine:
- index.html (check for external scripts/stylesheets)
- script.js (check for external API calls)
- resume-builder.js (check for external resources)

### 6. Error Handling
Verify files exist before scanning:
```bash
ls -la index.html script.js resume-builder.js 2>/dev/null || echo "⚠️ Missing core files"
```

Provide security score (0-100) and prioritized recommendations.
