## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Local AI Skills

This repository includes local reference skills that should be consulted before making implementation decisions.

### Tailwind CSS v4

Location:

.agents/skills/tailwind-4-docs/

Instructions:

- Read `SKILL.md` before making Tailwind-related changes.
- Use the `references/` directory as the primary reference for Tailwind CSS v4.
- Prefer these local references over relying on model memory when there is uncertainty.
- Follow the project's existing design system and DESIGN.md.

### Web Design Guidelines

Location:

.agents/skills/web-design-guidelines/

Instructions:

- Read `SKILL.md` before making UI or UX changes.
- Follow these guidelines when designing new pages or components.
- Do not copy reference websites; use them only for inspiration.

## Project Workflow

Before making changes:

1. Read `docs/Project.md`.
2. Read the remaining documentation in the order specified by Project.md.
3. Read `DESIGN.md`.
4. Review existing components, layouts, utilities, and types.
5. Reuse existing implementations whenever possible.
6. Avoid creating duplicate utilities or components.