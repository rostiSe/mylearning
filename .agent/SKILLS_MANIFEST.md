# Vendored skills — provenance

These skills come from **Matt Pocock's `skills` repo** ("Skills for Real Engineers"),
copied here as a self-contained snapshot.

- **Source:** https://github.com/mattpocock/skills
- **Upstream commit:** `6eeb81b5fcfeeb5bd531dd47ab2f9f2bbea27461`
- **Snapshotted:** 2026-06-23
- **License:** MIT — see `LICENSE.mattpocock-skills`

## Layout

Upstream groups skills into category folders (`skills/engineering/...`,
`skills/productivity/...`, etc.). Claude Code discovers project skills one level
deep (`.claude/skills/<name>/SKILL.md`), so the skills are **flattened** here:
each skill lives at `.agent/skills/<name>/`. `.claude/skills` is a symlink to
`.agent/skills`.

The upstream `deprecated/` category (4 skills the author retired) was **not**
vendored.

## Updating

This is a manual snapshot, not a submodule. To refresh:

```bash
curl -sSL https://codeload.github.com/mattpocock/skills/tar.gz/refs/heads/main \
  | tar -xz -C /tmp && # then re-flatten the skills/ subdirs into .agent/skills/
```

## Skills (origin category in parentheses)

- `ask-matt` (engineering)
- `codebase-design` (engineering)
- `decision-mapping` (in-progress)
- `diagnosing-bugs` (engineering)
- `domain-modeling` (engineering)
- `edit-article` (personal)
- `git-guardrails-claude-code` (misc)
- `grill-me` (productivity)
- `grill-with-docs` (engineering)
- `grilling` (productivity)
- `handoff` (productivity)
- `implement` (engineering)
- `improve-codebase-architecture` (engineering)
- `migrate-to-shoehorn` (misc)
- `obsidian-vault` (personal)
- `prototype` (engineering)
- `resolving-merge-conflicts` (engineering)
- `review` (in-progress)
- `scaffold-exercises` (misc)
- `setup-matt-pocock-skills` (engineering)
- `setup-pre-commit` (misc)
- `tdd` (engineering)
- `teach` (productivity)
- `to-issues` (engineering)
- `to-prd` (engineering)
- `triage` (engineering)
- `writing-beats` (in-progress)
- `writing-fragments` (in-progress)
- `writing-great-skills` (productivity)
- `writing-shape` (in-progress)
