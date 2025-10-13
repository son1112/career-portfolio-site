---
description: Audit portfolio for unreleased project user count claims
---

Audit portfolio for user count claims on unreleased projects:

## Projects to Distinguish

### Released (Past Employment - OK to claim)
- **TaxJar** - "50,000+ TaxJar users" ✅
- **Stripe** - Tax compliance work ✅
- **PaymentSpring** - Payment processing ✅
- **Prairie Hill Learning Center** - Internal tools ✅

### Unreleased (Research Projects - NO user claims)
- **PRISM** - Neurodivergent communication (unreleased) ❌
- **Rubber Ducky** - Voice AI research (unreleased) ❌
- **can.code Research Labs** - Research organization (unreleased) ❌
- **StoryTimeStar** - Storytelling platform (unreleased) ❌
- **ReplayReady** - Session replay (unreleased) ❌

## Scan for User Count Claims

```bash
grep -rn "50,000\|50K\|users enabled\|Users Enabled\|Users Served\|active users" --include="*.html" --include="*.js" . | head -30
```

## Manual Review Required

Use Read tool to check these key files for context:
- index.html (search for "50" to find all instances)
- resume.html (summary section)
- script.js (hero variants)
- resume-builder.js (resume variants)
- README.md (achievement metrics)

Verify files exist:
```bash
ls -la index.html resume.html script.js resume-builder.js README.md 2>/dev/null || echo "⚠️ Missing files"
```

## Acceptable Patterns

✅ **OK:** "Enabled accurate tax compliance for 50,000+ TaxJar users"
✅ **OK:** "Enterprise systems at Stripe and TaxJar"
✅ **OK:** "126+ Research Sessions" (documented experiments)
✅ **OK:** "5+ Major Projects"

❌ **NOT OK:** "50K+ Users Enabled" (without TaxJar/Stripe context)
❌ **NOT OK:** "serving 50,000+ users" (for unreleased projects)
❌ **NOT OK:** Any user count for PRISM, Rubber Ducky, Research Labs

## Report Format

Provide:
1. List of all user count references found
2. Classification (Released/Unreleased)
3. Recommended changes (if any)
4. Overall compliance status
