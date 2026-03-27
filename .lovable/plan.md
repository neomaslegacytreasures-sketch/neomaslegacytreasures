

## Plan: Lighten the Main Page Background

The current `--background` is `30 25% 95%` (a warm bone ~#F0EBE4). The goal is to make it lighter while keeping the warm dusty rose undertone — essentially a near-white with a hint of warmth.

### Single Change

**File: `src/index.css` (line 16)**
- Change `--background: 30 25% 95%` → `--background: 30 20% 97%`

This shifts the background from ~#F0EBE4 to ~#F8F6F3 — noticeably lighter and closer to white, but still warm. All other brand colors (terracotta primary, sage secondary, dusty rose accent, walnut foreground) remain unchanged. Every component using `bg-background` will automatically pick up the lighter tone.

That's it — one line change.

