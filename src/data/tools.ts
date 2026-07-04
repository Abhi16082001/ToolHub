import type { Category, Tool } from '../types/tool';

export const categories: Category[] = [
  {
    name: 'Text Tools',
    slug: 'text-tools',
    description: 'Utilities for editing, formatting, cleaning and analyzing text.',
    icon: 'text',
    tools: [
      { name: 'Word Counter', slug: 'word-counter', description: 'Count words, characters, sentences and paragraphs instantly.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'hash', priority: 'high', tags: ['counter', 'words', 'characters'] },
      { name: 'Character Counter', slug: 'character-counter', description: 'Count characters with and without spaces in your text.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'type', priority: 'high', tags: ['counter', 'characters'] },
      { name: 'Reading Time Calculator', slug: 'reading-time-calculator', description: 'Estimate how long it takes to read any text.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'clock', priority: 'high', tags: ['reading', 'time'] },
      { name: 'Remove Duplicate Lines', slug: 'remove-duplicate-lines', description: 'Remove duplicate lines from any text instantly.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'layers', priority: 'high', tags: ['clean', 'duplicates'] },
      { name: 'Remove Extra Spaces', slug: 'remove-extra-spaces', description: 'Clean up extra whitespace and spaces from your text.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'minimize', priority: 'high', tags: ['clean', 'spaces'] },
      { name: 'Reverse Text', slug: 'reverse-text', description: 'Reverse any text string or reverse lines of text.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'arrow-left-right', priority: 'high', tags: ['reverse', 'flip'] },
      { name: 'Slug Generator', slug: 'slug-generator', description: 'Convert any text into a clean URL-friendly slug.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'link', priority: 'high', tags: ['slug', 'url', 'seo'] },
      { name: 'Uppercase Converter', slug: 'uppercase-converter', description: 'Convert any text to UPPERCASE instantly.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'case-upper', priority: 'high', tags: ['case', 'uppercase'] },
      { name: 'Lowercase Converter', slug: 'lowercase-converter', description: 'Convert any text to lowercase instantly.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'case-lower', priority: 'high', tags: ['case', 'lowercase'] },
      { name: 'Title Case Converter', slug: 'title-case-converter', description: 'Convert text to Title Case for headings and titles.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'heading', priority: 'high', tags: ['case', 'title'] },
      { name: 'Text Repeater', slug: 'text-repeater', description: 'Repeat any text or character a specified number of times.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'repeat', priority: 'high', tags: ['repeat', 'duplicate'] },
      { name: 'Find & Replace', slug: 'find-replace', description: 'Find and replace text within any string or document.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'search', priority: 'high', tags: ['find', 'replace', 'search'] },
      { name: 'Sort Lines', slug: 'sort-lines', description: 'Sort lines of text alphabetically A-Z or Z-A.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'arrow-up-down', priority: 'high', tags: ['sort', 'lines'] },
      { name: 'Remove Empty Lines', slug: 'remove-empty-lines', description: 'Remove all blank and empty lines from your text.', category: 'Text Tools', categorySlug: 'text-tools', icon: 'trash', priority: 'high', tags: ['clean', 'empty'] },
    ],
  },
  {
    name: 'Developer Tools',
    slug: 'developer-tools',
    description: 'Utilities commonly used by developers for formatting, encoding and debugging.',
    icon: 'code',
    tools: [
      { name: 'JSON Formatter', slug: 'json-formatter', description: 'Format, beautify and validate JSON data instantly.', category: 'Developer Tools', categorySlug: 'developer-tools', icon: 'braces', priority: 'high', tags: ['json', 'format', 'validate'] },
      { name: 'JSON Validator', slug: 'json-validator', description: 'Validate JSON syntax and check for errors.', category: 'Developer Tools', categorySlug: 'developer-tools', icon: 'check-circle', priority: 'high', tags: ['json', 'validate'] },
      { name: 'Base64 Encoder / Decoder', slug: 'base64-encoder-decoder', description: 'Encode and decode Base64 strings instantly.', category: 'Developer Tools', categorySlug: 'developer-tools', icon: 'lock', priority: 'high', tags: ['base64', 'encode', 'decode'] },
      { name: 'URL Encoder / Decoder', slug: 'url-encoder-decoder', description: 'Encode and decode URL strings for safe transmission.', category: 'Developer Tools', categorySlug: 'developer-tools', icon: 'globe', priority: 'high', tags: ['url', 'encode', 'decode'] },
      { name: 'UUID Generator', slug: 'uuid-generator', description: 'Generate random UUIDs (v4) for your projects.', category: 'Developer Tools', categorySlug: 'developer-tools', icon: 'fingerprint', priority: 'high', tags: ['uuid', 'generate', 'random'] },
      { name: 'Unix Timestamp Converter', slug: 'unix-timestamp-converter', description: 'Convert Unix timestamps to human-readable dates and back.', category: 'Developer Tools', categorySlug: 'developer-tools', icon: 'timer', priority: 'high', tags: ['timestamp', 'unix', 'date'] },
      { name: 'JWT Decoder', slug: 'jwt-decoder', description: 'Decode and inspect JWT tokens without a secret.', category: 'Developer Tools', categorySlug: 'developer-tools', icon: 'key', priority: 'high', tags: ['jwt', 'decode', 'token'] },
      { name: 'Regex Tester', slug: 'regex-tester', description: 'Test and debug regular expressions with live matching.', category: 'Developer Tools', categorySlug: 'developer-tools', icon: 'regex', priority: 'high', tags: ['regex', 'test', 'pattern'] },
      { name: 'HTML Beautifier', slug: 'html-beautifier', description: 'Beautify and format HTML code for readability.', category: 'Developer Tools', categorySlug: 'developer-tools', icon: 'code-2', priority: 'high', tags: ['html', 'format', 'beautify'] },
      { name: 'CSS Beautifier', slug: 'css-beautifier', description: 'Beautify and format CSS code for readability.', category: 'Developer Tools', categorySlug: 'developer-tools', icon: 'palette', priority: 'high', tags: ['css', 'format', 'beautify'] },
      { name: 'SHA-256 Hash Generator', slug: 'sha256-hash-generator', description: 'Generate SHA-256 hashes from any text input.', category: 'Developer Tools', categorySlug: 'developer-tools', icon: 'shield', priority: 'high', tags: ['hash', 'sha256', 'security'] },
    ],
  },
  {
    name: 'Converter Tools',
    slug: 'converter-tools',
    description: 'Convert measurements, numbers, colors and data formats.',
    icon: 'arrows-right-left',
    tools: [
      { name: 'Length Converter', slug: 'length-converter', description: 'Convert between meters, feet, inches, miles and more.', category: 'Converter Tools', categorySlug: 'converter-tools', icon: 'ruler', priority: 'high', tags: ['length', 'convert', 'measurement'] },
      { name: 'Weight Converter', slug: 'weight-converter', description: 'Convert between kilograms, pounds, ounces and more.', category: 'Converter Tools', categorySlug: 'converter-tools', icon: 'scale', priority: 'high', tags: ['weight', 'convert', 'mass'] },
      { name: 'Temperature Converter', slug: 'temperature-converter', description: 'Convert between Celsius, Fahrenheit and Kelvin.', category: 'Converter Tools', categorySlug: 'converter-tools', icon: 'thermometer', priority: 'high', tags: ['temperature', 'celsius', 'fahrenheit'] },
      { name: 'Number Base Converter', slug: 'number-base-converter', description: 'Convert between binary, octal, decimal and hexadecimal.', category: 'Converter Tools', categorySlug: 'converter-tools', icon: 'binary', priority: 'high', tags: ['binary', 'hex', 'decimal', 'octal'] },
      { name: 'Color Converter', slug: 'color-converter', description: 'Convert between HEX, RGB, HSL, CMYK and more color formats.', category: 'Converter Tools', categorySlug: 'converter-tools', icon: 'droplet', priority: 'high', tags: ['color', 'hex', 'rgb', 'hsl'] },
      { name: 'ASCII Converter', slug: 'ascii-converter', description: 'Convert text to ASCII codes and ASCII codes to text.', category: 'Converter Tools', categorySlug: 'converter-tools', icon: 'terminal', priority: 'high', tags: ['ascii', 'text', 'convert'] },
      { name: 'Area Converter', slug: 'area-converter', description: 'Convert between square meters, acres, hectares and more.', category: 'Converter Tools', categorySlug: 'converter-tools', icon: 'square', priority: 'high', tags: ['area', 'convert', 'measurement'] },
      { name: 'Volume Converter', slug: 'volume-converter', description: 'Convert between liters, gallons, cups and more.', category: 'Converter Tools', categorySlug: 'converter-tools', icon: 'cylinder', priority: 'high', tags: ['volume', 'convert', 'liters'] },
      { name: 'Speed Converter', slug: 'speed-converter', description: 'Convert between km/h, mph, m/s and more speed units.', category: 'Converter Tools', categorySlug: 'converter-tools', icon: 'gauge', priority: 'high', tags: ['speed', 'convert', 'velocity'] },
    ],
  },
  {
    name: 'Calculators',
    slug: 'calculators',
    description: 'Perform mathematical, financial and everyday calculations.',
    icon: 'calculator',
    tools: [
      { name: 'GST Calculator', slug: 'gst-calculator', description: 'Calculate GST amounts and totals for any price.', category: 'Calculators', categorySlug: 'calculators', icon: 'receipt', priority: 'high', tags: ['gst', 'tax', 'calculate'] },
      { name: 'Percentage Calculator', slug: 'percentage-calculator', description: 'Calculate percentages, increases, decreases and more.', category: 'Calculators', categorySlug: 'calculators', icon: 'percent', priority: 'high', tags: ['percentage', 'calculate', 'math'] },
      { name: 'Discount Calculator', slug: 'discount-calculator', description: 'Calculate discounted prices and savings instantly.', category: 'Calculators', categorySlug: 'calculators', icon: 'tag', priority: 'high', tags: ['discount', 'sale', 'price'] },
      { name: 'Age Calculator', slug: 'age-calculator', description: 'Calculate exact age from a date of birth.', category: 'Calculators', categorySlug: 'calculators', icon: 'cake', priority: 'high', tags: ['age', 'birthday', 'date'] },
      { name: 'EMI Calculator', slug: 'emi-calculator', description: 'Calculate monthly EMI for loans and mortgages.', category: 'Calculators', categorySlug: 'calculators', icon: 'credit-card', priority: 'high', tags: ['emi', 'loan', 'mortgage'] },
      { name: 'Compound Interest Calculator', slug: 'compound-interest-calculator', description: 'Calculate compound interest and investment growth.', category: 'Calculators', categorySlug: 'calculators', icon: 'trending-up', priority: 'high', tags: ['interest', 'compound', 'investment'] },
      { name: 'Simple Interest Calculator', slug: 'simple-interest-calculator', description: 'Calculate simple interest on any principal amount.', category: 'Calculators', categorySlug: 'calculators', icon: 'dollar-sign', priority: 'high', tags: ['interest', 'simple', 'finance'] },
      { name: 'Date Difference Calculator', slug: 'date-difference-calculator', description: 'Calculate the difference between two dates in days, months and years.', category: 'Calculators', categorySlug: 'calculators', icon: 'calendar', priority: 'high', tags: ['date', 'difference', 'days'] },
      { name: 'Profit Calculator', slug: 'profit-calculator', description: 'Calculate profit, loss and profit margin for any transaction.', category: 'Calculators', categorySlug: 'calculators', icon: 'bar-chart', priority: 'high', tags: ['profit', 'loss', 'margin'] },
    ],
  },
  {
    name: 'Generators',
    slug: 'generators',
    description: 'Generate passwords, UUIDs, lorem ipsum, QR codes and more.',
    icon: 'sparkles',
    tools: [
      { name: 'Password Generator', slug: 'password-generator', description: 'Generate strong, secure passwords with custom options.', category: 'Generators', categorySlug: 'generators', icon: 'lock-keyhole', priority: 'high', tags: ['password', 'security', 'generate'] },
      { name: 'Lorem Ipsum Generator', slug: 'lorem-ipsum-generator', description: 'Generate placeholder lorem ipsum text for designs.', category: 'Generators', categorySlug: 'generators', icon: 'file-text', priority: 'high', tags: ['lorem', 'ipsum', 'placeholder'] },
      { name: 'Random Number Generator', slug: 'random-number-generator', description: 'Generate random numbers within any range.', category: 'Generators', categorySlug: 'generators', icon: 'dice', priority: 'high', tags: ['random', 'number', 'generate'] },
      { name: 'Username Generator', slug: 'username-generator', description: 'Generate unique and creative usernames instantly.', category: 'Generators', categorySlug: 'generators', icon: 'user', priority: 'high', tags: ['username', 'generate', 'name'] },
      { name: 'Color Palette Generator', slug: 'color-palette-generator', description: 'Generate beautiful color palettes for your projects.', category: 'Generators', categorySlug: 'generators', icon: 'swatch-book', priority: 'high', tags: ['color', 'palette', 'design'] },
      { name: 'QR Code Generator', slug: 'qr-code-generator', description: 'Generate QR codes for URLs, text and more.', category: 'Generators', categorySlug: 'generators', icon: 'qr-code', priority: 'high', tags: ['qr', 'code', 'generate'] },
    ],
  },
];

export const allTools: Tool[] = categories.flatMap((c) => c.tools);

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getToolBySlug(categorySlug: string, toolSlug: string): Tool | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.tools.find((t) => t.slug === toolSlug);
}

export function getRelatedTools(tool: Tool, limit = 4): Tool[] {
  const category = getCategoryBySlug(tool.categorySlug);
  if (!category) return [];
  return category.tools.filter((t) => t.slug !== tool.slug).slice(0, limit);
}
