---
description: Add item to backlog or review backlog priorities
argument-hint: ["add <item>" or "review"]
---

Backlog management for career portfolio:

## Current Backlog

@BACKLOG.md

## Commands

**If argument is "add [item]":**
- Add $ARGUMENTS to appropriate backlog section
- Use proper markdown formatting
- Follow existing structure (Priority 1/2/3)
- Include checkbox [ ] for tracking
- Commit with message: "Add to backlog: [item]"

**If argument is "review":**
- Read entire BACKLOG.md
- Identify completed items not checked off
- Suggest priority reordering based on:
  - Security/accessibility impact
  - User-facing improvements
  - Technical debt severity
- Highlight stale items (> 30 days)

**If no argument:**
- Show latest completions section
- Show next recommended priority items
- Provide summary of backlog health

## Backlog Categories

1. **🎯 Current Sprint (Priority 1 - Immediate)**
2. **🚀 Next Sprint (Priority 2 - Near Term)**
3. **🔮 Future Releases (Priority 3 - Long Term)**
4. **🐛 Bug Fixes & Maintenance**
5. **🔒 Security & Code Quality** (from PR reviews)

## Session Completions

Always document major completions with:
- Date
- PR number (if applicable)
- Files changed
- Impact/benefit
- Claude review rating (if applicable)

Follow the principle: Document everything, track progress transparently.
