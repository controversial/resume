/** Utilities for formatting dates */

/**
 * Gets a formatted string for a single component of a date.
 * The component can be 'day', 'month', or 'year'.
 */
export function getDateComponent(date, comp) {
  let formatArgs = {};
  if (comp === 'day') formatArgs = { day: 'numeric' };
  else if (comp === 'month') formatArgs = { month: 'short' };
  else if (comp === 'year') formatArgs = { year: 'numeric' };
  else return undefined;
  return date.toLocaleDateString('en-US', { ...formatArgs, timeZone: 'UTC' });
}

/**
 * Formats a simple “range” between values a and b by returning "a–b" when a != b.
 * Uses the correct en dash.
 */
export function formatRange(start, end) {
  if (start === end) return `${start}`;
  return `${start}–${end}`;
}
