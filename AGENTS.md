<INSTRUCTIONS>
# Google Onboarding Mode (Repo Rules)

This repository is currently in a development phase for Google business setup and onboarding work.

Your job: help manage and complete setup for:
- Google Business Profile
- Google Search Console
- Google Analytics 4
- Google Tag Manager if needed
- sitemap, robots, indexation, and access tracking

Do not default to customer-safe website editing behavior from the delivery phase. That workflow is preserved in `AGENTS.customer-website.md` for later use.

## Main working files

Use these as the source of truth first:
- `.codex/tracking/toulousewinetrips-google-onboarding.md`
- `.codex/tracking/toulousewinetrips-access-register.md`
- `.codex/templates/google-onboarding-template.md`
- `docs/toulousewinetrips_google_onboarding_guide.md`

Before proposing new onboarding work:
1. check the tracker
2. update status
3. identify blockers
4. suggest the next smallest useful step

## Scope for this mode

Default allowed work:
- create and maintain onboarding checklists
- record access and ownership status
- prepare Google setup steps
- review sitemap, robots, and indexation setup
- review tracking setup needs
- document missing information
- create reusable onboarding templates

Allowed website edits only when they directly support Google onboarding:
- tracking installation
- sitemap or robots adjustments
- metadata or verification-related changes
- lightweight SEO fixes needed for setup

If a request is mainly about customer-facing site content, design, layout, images, or handoff support, treat that as a different mode and refer to `AGENTS.customer-website.md`.

## Approval gates

### Gate 1 — Plan approval before file edits
Before editing any file, reply with:
1) **What I understood**
2) **Proposed approach**
3) **Files I will change**
4) **Inputs I still need from you**
5) Ask: **Reply `APPROVE PLAN` or `GO` to proceed, or tell me what to change.**

Do not modify files until the user replies exactly `APPROVE PLAN` or `GO`.

### Gate 2 — Publish approval before commit or push
After changes:
1) summarize what changed
2) explain any local preview or verification step if relevant
3) report checks run and results
4) ask: **Reply `APPROVE PUBLISH` to commit & push to `main`, or tell me changes.**

Do not commit or push until the user replies exactly `APPROVE PUBLISH`.

## Working method

Preferred execution order:
1. Google Business Profile status
2. domain and DNS access path
3. Search Console
4. sitemap and robots
5. GA4
6. GTM decision
7. SEO baseline
8. documentation and reusable templates

For each system:
- check whether it already exists
- record access status
- record owner or admin if known
- define the next action
- mark done when complete

## Tracking rules

- Keep live progress in `.codex/tracking/toulousewinetrips-google-onboarding.md`
- Keep account and owner details in `.codex/tracking/toulousewinetrips-access-register.md`
- When a step is blocked, write the blocker clearly and name what is missing
- Prefer status words like `Done`, `Waiting`, `Next`, `Later`, `Blocked`
- Do not scatter onboarding status across many files when one tracker can hold it

## Website constraints

- Do NOT edit build outputs: `out/`, `.next/`
- Respect GitHub Pages basePath rules already used in the project
- If tracking code or verification code is added, change the smallest safe file possible
- If a structural website change is needed, explain why it is required for Google setup

## Validation

Run these commands and report success or failure when:
- the change affects structure or behavior
- tracking code is installed
- sitemap, robots, metadata, or routing are changed
- you are about to publish

Commands:
- `npm run lint`
- `npm run build`

If checks fail, stop and present a fix plan before making more changes.

## Output style

- Be concise and operational
- Prefer checklist language and clear next actions
- Separate `done`, `waiting`, `next`, and `blocked`
- Avoid unnecessary website-design guidance unless the task clearly requires it

## Git / Publishing rules

- Publishing target is `main`
- Only push after `APPROVE PUBLISH`
- Prefer a clear commit message such as `Update: google onboarding workflow`
</INSTRUCTIONS>
