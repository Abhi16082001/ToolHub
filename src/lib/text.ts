/** Count words in text */
export function countWords(text: string): number {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

/** Remove duplicate lines (case-sensitive by default) */
export function removeDuplicateLines(text: string, caseSensitive = true): string {
  const lines = text.split('\n');
  const seen = new Set<string>();
  return lines
    .filter((line) => {
      const key = caseSensitive ? line : line.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .join('\n');
}

/** Remove extra spaces (collapse multiple spaces, trim lines) */
export function removeExtraSpaces(text: string): string {
  return text
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n');
}

/** Reverse a string */
export function reverseText(text: string): string {
  return [...text].reverse().join('');
}

/** Reverse lines */
export function reverseLines(text: string): string {
  return text.split('\n').reverse().join('\n');
}

/** Convert text to URL-friendly slug */
export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Convert to UPPERCASE */
export function toUpperCase(text: string): string {
  return text.toUpperCase();
}

/** Convert to lowercase */
export function toLowerCase(text: string): string {
  return text.toLowerCase();
}

/** Convert to Title Case */
export function toTitleCase(text: string): string {
  const minorWords = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by', 'in', 'of', 'up', 'as', 'is', 'it']);
  return text
    .toLowerCase()
    .split(' ')
    .map((word, i) => {
      if (i === 0 || !minorWords.has(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(' ');
}

/** Repeat text N times */
export function repeatText(text: string, times: number, separator = ''): string {
  if (times <= 0) return '';
  return Array(times).fill(text).join(separator);
}

/** Sort lines A-Z or Z-A */
export function sortLines(text: string, direction: 'asc' | 'desc' = 'asc'): string {
  const lines = text.split('\n');
  lines.sort((a, b) => a.localeCompare(b));
  if (direction === 'desc') lines.reverse();
  return lines.join('\n');
}

/** Remove empty lines */
export function removeEmptyLines(text: string): string {
  return text
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .join('\n');
}

/** Find and replace */
export function findReplace(text: string, find: string, replace: string, useRegex = false, caseSensitive = true): string {
  if (!find) return text;
  if (useRegex) {
    try {
      const flags = caseSensitive ? 'g' : 'gi';
      const regex = new RegExp(find, flags);
      return text.replace(regex, replace);
    } catch {
      return text;
    }
  }
  const flags = caseSensitive ? 'g' : 'gi';
  const escaped = find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(escaped, flags), replace);
}
