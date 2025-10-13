---
description: Run pre-deployment verification checklist
---

Pre-deployment verification for career portfolio:

## Deployment Checklist

### 1. Git Status
```bash
git status
```

### 2. HTML Validation
Check for common HTML issues:
```bash
grep -n "onclick\|<style>" index.html resume.html dynamic-resume.html || echo "✓ No inline handlers or body styles"
```

### 3. User Claims Audit
Verify no unreleased project claims:
```bash
grep -rn "50,000\|50K\|users enabled" --include="*.html" --include="*.js" . | grep -v "TaxJar\|Stripe" || echo "✓ No unreleased user claims"
```

### 4. Security Check
Verify external link security:
```bash
grep -n 'target="_blank"' index.html | grep -v 'rel="noopener noreferrer"' || echo "✓ All external links secured"
```

### 5. File Size Check
Check for large files:
```bash
du -sh public/* screenshots/* 2>/dev/null | sort -h | tail -5
```

### 6. Branch Status
```bash
git log --oneline -5
git diff --stat origin/main 2>/dev/null || echo "ℹ️ No remote tracking configured"
```

## Final Verification

Use Read tool to manually review key files:
- index.html (profile stats section)
- index.html (portfolio stats section)
- README.md (achievement metrics)

Verify files exist:
```bash
ls -la index.html README.md resume.html dynamic-resume.html 2>/dev/null || echo "⚠️ Missing core files"
```

**Deployment Decision:**
- ✅ Ready to deploy
- ⚠️ Issues found (list specific issues)
- ❌ Critical blockers (explain)

Provide clear go/no-go recommendation with reasoning.
