/* global test, expect */

import { getDateComponent, formatRange, formatDateRange } from './dates';

test('getDateComponent can return components of UTC dates', () => {
  const d = new Date('2020-03-14');
  expect(getDateComponent(d, 'day')).toBe('14');
  expect(getDateComponent(d, 'month')).toBe('Mar');
  expect(getDateComponent(d, 'year')).toBe('2020');
  expect(getDateComponent(d, 'garbage')).toBe(undefined);
});

test('formatRange works properly', () => {
  const enDash = '\u2013';
  expect(formatRange('a', 'b')).toBe(`a${enDash}b`);
  expect(formatRange('a', 'a')).toBe('a');
});

test('formatDateRange works properly', () => {
  const precision = { current: null };
  const makeRange = (a, b) => formatDateRange(new Date(a), new Date(b), precision.current);
  // Day precision
  precision.current = 'day';
  expect(makeRange('2019-01-01', '2020-02-02')).toBe('Jan 1, 2019–Feb 2, 2020');
  expect(makeRange('2020-01-01', '2020-02-02')).toBe('Jan 1–Feb 2, 2020');
  expect(makeRange('2020-01-01', '2020-01-02')).toBe('Jan 1–2, 2020');
  expect(makeRange('2020-01-01', '2020-01-01')).toBe('Jan 1, 2020');
  // Month precision
  precision.current = 'month';
  expect(makeRange('2019-01-01', '2020-02-02')).toBe('Jan 2019–Feb 2020');
  expect(makeRange('2020-01-01', '2020-02-02')).toBe('Jan–Feb 2020');
  expect(makeRange('2020-01-01', '2020-01-31')).toBe('Jan 2020');
  expect(makeRange('2020-01-01', '2020-01-01')).toBe('Jan 2020');
  // Year precision
  precision.current = 'year';
  expect(makeRange('2019-01-01', '2020-02-02')).toBe('2019–2020');
  expect(makeRange('2020-01-01', '2020-12-31')).toBe('2020');
  expect(makeRange('2020-01-01', '2020-01-01')).toBe('2020');
});

test('formatDateRange handles missing start/end dates', () => {
  // Missing start date
  expect(formatDateRange(undefined, new Date('2020-01-01'), 'day')).toBe('Until Jan 1, 2020');
  // Missing end date
  expect(formatDateRange(new Date('2020-01-01'), undefined, 'day')).toBe('Jan 1, 2020–Present');
});

test('formatDateRange works properly for multiple ranges', () => {
  expect(formatDateRange(
    [new Date('2018-01-01'), new Date('2020-03-14')],
    [new Date('2019-04-20'), new Date('2020-03-15')],
    'day',
  )).toBe('Jan 1, 2018–Apr 20, 2019; Mar 14–15, 2020');
  expect(formatDateRange(
    [new Date('2018-01-01'), new Date('2020-03-14')],
    [new Date('2019-04-20'), new Date('2020-03-15')],
    'month',
  )).toBe('Jan 2018–Apr 2019, Mar 2020');
});

test('formatDateRange returns an empty string for empty data', () => {
  expect(formatDateRange(undefined, undefined, 'day')).toBe('');
  expect(formatDateRange(undefined, undefined, 'month')).toBe('');
  expect(formatDateRange(undefined, undefined, 'year')).toBe('');
  expect(formatDateRange([], [], 'day')).toBe('');
  expect(formatDateRange([], [], 'month')).toBe('');
  expect(formatDateRange([], [], 'year')).toBe('');
});
