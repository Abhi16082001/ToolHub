
# 5. Generator Tools

Purpose

Generate useful values, names, text and assets entirely within the browser.

Category Priority

★★★★☆

General Rule

Every generator must work completely offline inside the browser.

Never depend on external APIs.

If a library is required (for example QR Code generation), prefer lightweight, open-source libraries bundled with the project.

---

## A. Security

| Tool | Priority | Difficulty | SEO |
|------|----------|------------|-----|
| Password Generator | High | Easy | ★★★★★ |
| UUID Generator | High | Easy | ★★★★★ |

Notes

Password Generator should support:

- Length
- Uppercase
- Lowercase
- Numbers
- Symbols
- Exclude Similar Characters
- Exclude Ambiguous Characters

---

## B. Text & Random

| Tool | Priority | Difficulty | SEO |
|------|----------|------------|-----|
| Lorem Ipsum Generator | High | Easy | ★★★★★ |
| Random Number Generator | High | Easy | ★★★★★ |
| Random String Generator | High | Easy | ★★★★☆ |
| Random Letter Generator | Medium | Easy | ★★★☆☆ |
| Random Word Generator | Medium | Easy | ★★★☆☆ |
| Random Sentence Generator | Low | Medium | ★★☆☆☆ |
| Random Paragraph Generator | Low | Medium | ★★☆☆☆ |

---

## C. Naming

| Tool | Priority | Difficulty | SEO |
|------|----------|------------|-----|
| Username Generator | High | Easy | ★★★★★ |
| Business Name Generator | High | Medium | ★★★★★ |
| Company Name Generator | Medium | Medium | ★★★★☆ |
| Team Name Generator | Medium | Easy | ★★★☆☆ |

Notes

Use curated local word lists.

Never require AI.

Never require APIs.

---

## D. Design

| Tool | Priority | Difficulty | SEO |
|------|----------|------------|-----|
| Color Palette Generator | High | Medium | ★★★★★ |
| CSS Gradient Generator | High | Medium | ★★★★★ |

Future (Optional)

- Box Shadow Generator
- Border Radius Generator
- CSS Clip Path Generator

These could also fit under Developer Tools if you later decide to expand that category.

---

## E. Codes

| Tool | Priority | Difficulty | SEO |
|------|----------|------------|-----|
| QR Code Generator | High | Easy | ★★★★★ |
| Barcode Generator | Medium | Medium | ★★★☆☆ |

Implementation Notes

Use browser-side libraries only.

Never send generated data to external services.

Allow downloading generated images.

---
