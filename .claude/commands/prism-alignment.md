---
description: Verify portfolio alignment with PRISM empathy-first philosophy
---

Verify portfolio alignment with PRISM philosophy:

## PRISM Philosophy Check

### Core Principles to Verify

**Three Pillars:**
1. **Technology:** Accessibility-First Architecture
2. **Organization:** Service-First Development
3. **Mission:** Personal Reality Into Shared Meaning

### Content Alignment Check

```bash
grep -rn "empathy\|accessibility\|PRISM\|inclusive\|neurodivergent" --include="*.html" --include="*.js" . | wc -l
```

### Files to Review

Use Read tool to examine:

**Main Portfolio:**
- index.html (philosophy section)
- index.html (profile bio)

**Hero Variants:**
- script.js (all 5 variants should have empathy-first language)

**Resume Variants:**
- resume-builder.js (all 5 variants should feature PRISM)

**Static Resume:**
- resume.html (summary should mention PRISM first)

Verify files exist:
```bash
ls -la index.html script.js resume-builder.js resume.html 2>/dev/null || echo "⚠️ Missing core files"
```

## Verification Checklist

- [ ] Philosophy section present on index.html
- [ ] PRISM featured as flagship project
- [ ] All 5 hero variants use empathy-first language
- [ ] All 5 resume variants mention PRISM
- [ ] SEO metadata includes accessibility-first keywords
- [ ] Skills section includes accessibility competencies
- [ ] Timeline highlights PRISM achievements
- [ ] No generic "AI engineer" positioning

## Language Patterns to Verify

✅ **Good:** "Empathy-driven AI research engineer"
✅ **Good:** "Building accessible intelligence for underserved communities"
✅ **Good:** "Personal Reality Into Shared Meaning"
✅ **Good:** "Accessibility-first architecture"

❌ **Avoid:** "Revolutionary AI solutions"
❌ **Avoid:** "Cutting-edge technology"
❌ **Avoid:** Generic positioning without empathy focus

## Alignment Score

Provide score (0-100) based on:
- Philosophy section completeness (25 points)
- Consistent empathy-first messaging (25 points)
- PRISM prominence (25 points)
- Accessibility claims backed by code (25 points)

List specific improvements if score < 90.
