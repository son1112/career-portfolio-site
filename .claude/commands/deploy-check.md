---
description: Run pre-deployment verification checklist
---

Pre-deployment verification for career portfolio:

## Deployment Checklist

### 1. Git Status
!git status

### 2. HTML Validation
Check for common HTML issues:
!grep -n "onclick\|<style>" index.html resume.html dynamic-resume.html || echo "✓ No inline handlers or body styles"

### 3. User Claims Audit
Verify no unreleased project claims:
!grep -rn "50,000\|50K\|users enabled" --include="*.html" --include="*.js" . | grep -v "TaxJar\|Stripe" || echo "✓ No unreleased user claims"

### 4. Security Check
Verify external link security:
!grep -n 'target="_blank"' index.html | grep -v 'rel="noopener noreferrer"' || echo "✓ All external links secured"

### 5. File Size Check
Check for large files:
!du -sh public/* screenshots/* 2>/dev/null | sort -h | tail -5

### 6. Branch Status
!git log --oneline -5
!git diff --stat origin/main

## Final Verification

Read key files for manual review:
- @index.html (lines 325-345) - Profile stats
- @index.html (lines 1428-1435) - Portfolio stats
- @README.md (line 15) - Achievement metrics

**Deployment Decision:**
- ✅ Ready to deploy
- ⚠️ Issues found (list specific issues)
- ❌ Critical blockers (explain)

Provide clear go/no-go recommendation with reasoning.
