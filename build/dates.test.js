/* global test, expect */

import { getDateComponent, formatRange } from './dates';

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
