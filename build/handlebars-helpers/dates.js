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

/**
 * Formats one or more date ranges.
 * startDate and endDate can be single dates or arrays of equal length, indicating multiple ranges.
 * Can format date ranges with day-level, month-level, or year-level “precision.”
 */
export function formatDateRange(startDate, endDate, precision = 'month') {
  if (!['day', 'month', 'year'].includes(precision)) throw new Error('formatDateRange precision must be one of day, month, year');

  const startDates = Array.isArray(startDate) ? startDate : [startDate];
  const endDates = Array.isArray(endDate) ? endDate : [endDate];
  if (startDates.length !== endDates.length) throw new Error('When formatting multiple ranges, formatDateRange requires the same number of start and end dates.');

  const ranges = startDates.map((_, i) => [startDates[i], endDates[i]]);
  const rangeStrings = ranges.map(([start, end]) => {
    // If there's no end date, the range is through present
    if (!start || !end) {
      const formatSingleDate = (d) => d.toLocaleDateString('en-US', {
        timeZone: 'UTC',
        year: 'numeric',
        ...(['month', 'day'].includes(precision) && { month: 'short' }),
        ...(precision === 'day' && { day: 'numeric' }),
      });
      if (start) return formatRange(formatSingleDate(start), 'Present');
      if (end) return `Until ${formatSingleDate(end)}`;
      return '';
    }
    // If there is an end date, we need fancy logic
    const day1 = getDateComponent(start, 'day');
    const month1 = getDateComponent(start, 'month');
    const year1 = getDateComponent(start, 'year');
    const day2 = getDateComponent(end, 'day');
    const month2 = getDateComponent(end, 'month');
    const year2 = getDateComponent(end, 'year');

    // Day-level precision range. Examples:
    //   - Jan 1, 2019–Feb 2, 2020
    //   - Jan 1–Feb 2, 2020
    //   - Jan 1–2, 2020
    //   - Jan 1, 2020
    if (precision === 'day') {
      if (year1 === year2) {
        const monthDayComponent = month1 === month2
          ? `${month1} ${formatRange(day1, day2)}`
          : formatRange(`${month1} ${day1}`, `${month2} ${day2}`);
        return `${monthDayComponent}, ${year1}`;
      }
      return formatRange(`${month1} ${day1}, ${year1}`, `${month2} ${day2}, ${year2}`);
    }
    // Month-level precision range. Examples:
    //   - Jan 2019–Feb 2020
    //   - Jan–Feb 2020
    //   - Jan 2020
    if (precision === 'month') {
      if (year1 === year2) return `${formatRange(month1, month2)} ${year1}`;
      return formatRange(`${month1} ${year1}`, `${month2} ${year2}`);
    }
    // Year-level precision range. Examples:
    //   - 2019–2020
    //   - 2020
    return formatRange(year1, year2);
  }).filter((s) => !!s);
  // Use semicolons as the separator if any of the range strings contains a comma.
  const separator = rangeStrings.some((s) => s.includes(',')) ? '; ' : ', ';
  return rangeStrings.join(separator);
}
