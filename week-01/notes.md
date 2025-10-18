# Week 1 Day 1: JavaScript Variables

**Date:** October 18, 2025  
**Time Started:** 2:00 AM  
**Time Ended:** 7:00 PM  
**Total Hours:** ~2.5 hours  
**Status:** ✅ In Progress

---

## What I Learned Today

### 1. var vs let vs const
- **var**: Function scope, can redeclare, can reassign (OLD - don't use!)
- **let**: Block scope, cannot redeclare, can reassign
- **const**: Block scope, cannot redeclare, cannot reassign

### 2. Scope
- **Block scope**: Variables inside {} only exist there (let, const)
- **Function scope**: Variables exist throughout entire function (var)

### 3. Important Discovery
Found a bug with nested loops using var - the inner loop overwrites the outer loop variable! Using let fixes this because each loop gets its own scope.

### 4. Type Coercion
- `"5" + 3 = "53"` (string wins in addition)
- `"5" - 3 = 2` (number wins in subtraction)
- `true = 1`, `false = 0` in math operations
- `==` does type conversion, `===` doesn't

---

## Practice Problems Completed
- ✅ Variables examples (var, let, const)
- ✅ Scope examples
- ✅ Type coercion - 5 problems
- 🔄 Bonus challenge - working on it

---

## Key Takeaways
1. Always use `const` by default
2. Use `let` only when reassignment is needed
3. NEVER use `var` - it causes scope bugs
4. Use `===` instead of `==` for comparisons

---

## Questions/Confusion
- None so far! The nested loop example really helped understand scope.

---

## Tomorrow's Plan
- Learn about functions (declarations, expressions, arrow functions)
- Practice with 10 function variations
