## Project Overview
Docusaurus site for Polish language learning. It's a cheat sheet covering the most important rules. The idea is that consumer already know Polish and uses this site to refresh their memory. All the text must be concise and presented in a way that is easy to scan. Expect that people will read this by diagonally.

## Key Patterns
**No comments** in source files (project convention).

## Markdown (.md) Files
- Highlight parts of words with **double asterisks** (e.g., dwo**je**).
- Highlight concepts, nouns, adjectives with `backticks` (e.g., `dziecko`, `osoby obu płci`).
- Highlight notation, symbols, code-like items with `backticks` (e.g., `-e`, `k`).
- In table cells: each example on new line (`<br/>`) and separated by:
  - Comma (`,`) if examples are short phrases or word forms.
  - Period (`.`) if examples are full sentences.
- When presenting related concepts or word pairs (e.g., `tylko` vs `dopiero`, `być` vs `zostać`), include a distinguishing example or context in the "Użycie"/explanation cell (separated by `<br/><br/>`) to help readers quickly grasp key differences.
- **Exceptions (Wyjątki) must always be at the end of the table.**

## Commands
- `npm start` - Dev server

