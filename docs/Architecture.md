# ToolHub Architecture

Version: 1.0

---

# Purpose

This document defines the architectural rules of ToolHub.

Its purpose is to ensure consistency, maintainability and scalability as the project grows.

All new features and tools should follow this architecture unless explicitly instructed otherwise.

---

# Architecture Philosophy

The project should be:

- modular
- reusable
- scalable
- easy to maintain
- easy to extend

Adding a new tool should require minimal code duplication.

---

# Routing Structure

The website uses clean, descriptive URLs.

General pattern:

/category/tool-name

Examples

/text-tools/word-counter

/text-tools/remove-duplicate-lines

/developer-tools/json-formatter

/developer-tools/base64-encoder

/converter-tools/length-converter

/calculators/gst-calculator

/generators/password-generator

Avoid deeply nested URLs.

Avoid query-based routing.

Good

/text-tools/text-repeater

Bad

/tool?id=15

Bad

/tool/text/repeater/online/free

---

# Folder Structure

The project should follow this general organization.

src/

components/
layouts/
pages/
lib/
utils/
data/
types/
styles/

public/

docs/

The exact structure may evolve over time, but responsibilities should remain separated.

---

# Responsibilities

## components/

Reusable UI components.

Examples:

- Button
- Input
- Card
- ToolCard
- ToolHeader
- ToolLayout
- FAQ
- Breadcrumb
- RelatedTools
- SearchBar
- CategoryGrid

Components should remain generic whenever possible.

---

## layouts/

Shared page layouts.

Examples:

- BaseLayout
- ToolLayout
- CategoryLayout

Layouts define page structure.

They should not contain business logic.

---

## pages/

Contains routes.

Every page should correspond to a URL.

Pages should remain lightweight.

Business logic should be extracted whenever practical.

---

## lib/

Shared business logic.

Examples:

conversion formulas

calculator formulas

validators

encoders

decoders

formatters

Keep reusable algorithms here.

---

## utils/

General helper functions.

Examples:

string helpers

number helpers

date helpers

clipboard helpers

URL helpers

Formatting helpers

---

## data/

Static project data.

Examples:

tool metadata

category metadata

FAQs

unit definitions

conversion tables

This folder should contain static data only.

---

## types/

Shared TypeScript types.

Avoid redefining interfaces throughout the project.

---

## public/

Static assets.

Examples:

icons

images

favicons

robots.txt

sitemap.xml

---

# Tool Structure

Each tool should remain independent.

A tool should contain only the logic necessary for solving one problem.

Avoid creating tools that solve many unrelated problems.

Good

Word Counter

Bad

Ultimate Text Utility

---

# Shared Components

Whenever multiple tools require similar UI, create reusable components instead of duplicating code.

Examples

Tool Header

Result Card

Copy Button

Reset Button

Input Section

Output Section

FAQ Section

Related Tools

Tool Description

Error Message

Success Message

Loading Indicator

---

# Shared Logic

Business logic should never be copied between tools.

If multiple tools require identical logic, extract it into reusable functions.

Examples

text cleaning

case conversion

unit conversion

number formatting

validation

encoding

---

# Naming Conventions

Use lowercase.

Use kebab-case.

Good

word-counter

json-formatter

length-converter

Bad

WordCounter

word_counter

Word-Counter

---

# File Naming

Astro pages

word-counter.astro

React/Islands (if ever needed)

ToolCard.tsx

ToolSearch.tsx

Utilities

string.ts

numbers.ts

clipboard.ts

Types

tool.ts

category.ts

---

# Categories

Current categories:

Text Tools

Developer Tools

Converter Tools

Calculators

Generators

Each category should have:

- landing page
- tool listing
- category description
- internal navigation

---

# Tool Independence

Every tool should be independently accessible.

Users should never be forced to navigate through another tool.

Every tool should have its own URL.

---

# Internal Linking

Related tools should always be linked whenever relevant.

Examples

Word Counter

↓

Character Counter

↓

Reading Time Calculator

↓

Text Repeater

This improves navigation and SEO.

---

# Static First

Prefer static rendering.

Avoid dynamic rendering unless absolutely necessary.

The website should remain deployable as static files.

---

# Client-Side Logic

Interactive functionality should execute inside the browser.

Avoid introducing backend services.

Prefer browser APIs whenever possible.

---

# Third-Party Libraries

Use third-party libraries only when they provide significant value.

Prefer:

small

well-maintained

popular

tree-shakeable

MIT or similarly permissive licensed

Avoid large dependencies for simple tasks.

---

# Error Handling

Tools should fail gracefully.

Show helpful error messages.

Never expose stack traces to users.

---

# State Management

Keep state local whenever possible.

Avoid unnecessary global state.

Simple tools should remain self-contained.

---

# Reusability

Whenever a pattern appears in multiple places, consider extracting it into:

component

utility

shared function

layout

Avoid premature abstraction.

Extract only after identifying genuine reuse.

---

# Scalability Goals

The architecture should comfortably support:

100+

200+

500+

tool pages

without requiring structural redesign.

---

# AI Development Rules

When implementing a new tool:

1. Check for reusable components first.

2. Check for reusable utilities.

3. Follow existing folder organization.

4. Do not duplicate existing logic.

5. Maintain naming consistency.

6. Keep implementation simple.

If multiple approaches exist, prefer the one most consistent with the existing codebase.

---

# Future Expansion

Future categories should integrate naturally into the existing structure.

Avoid architecture changes that require moving existing pages.

The goal is to make future growth additive rather than disruptive.

---

# Architecture Principle

The architecture should make adding a new tool feel routine.

A developer should primarily focus on the tool's functionality rather than deciding where code belongs.