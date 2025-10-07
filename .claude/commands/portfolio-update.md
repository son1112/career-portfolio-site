---
description: Update portfolio stats, achievements, and metrics
argument-hint: [new-stat or "audit"]
---

Update portfolio statistics and achievements:

1. **Current Stats Audit:**
   - Profile stats (Years Experience, Research Sessions, Days to MVP)
   - Resume summary metrics
   - Portfolio section stats
   - Achievement cards

2. **Files to Check:**

   Use Read tool to examine:
   - index.html (profile stats, resume summary, portfolio stats, achievements)
   - resume.html (resume summary)
   - script.js (hero variants)
   - resume-builder.js (resume variants)
   - README.md (achievement metrics)

   Verify files exist:
   ```bash
   ls -la index.html resume.html script.js resume-builder.js README.md 2>/dev/null || echo "⚠️ Missing files"
   ```

3. **Verification:**
   - Ensure no claims for unreleased projects
   - Verify factual accuracy (TaxJar/Stripe work preserved)
   - Check consistency across all 5 hero variants
   - Validate all 5 resume variants match

4. **If argument provided:**
   - Use the provided argument to update specific stat
   - After making changes, commit with descriptive message

Follow the principle: Under-promise, over-deliver. Only claim what's released and proven.
