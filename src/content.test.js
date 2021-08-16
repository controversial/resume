/* global test, expect */

import content from './content.js';

test('All content keys are present', () => {
  const expectedKeys = ['about', 'email', 'portfolio', 'experience', 'work', 'education', 'skills', 'links'];
  expect(Object.keys(content).sort()).toEqual(expectedKeys.sort());
});

test('startDates come before endDates', () => {
  // Get all date ranges from content (including each range of multi-ranges)
  const dateRanges = [
    ...content.experience,
    ...content.work,
    ...content.education,
  ].flatMap(({ startDate, endDate }) => {
    if (Array.isArray(startDate)) {
      expect(endDate || []).toBeInstanceOf(Array);
      if (endDate) expect(endDate.length).toBe(startDate.length);
      return startDate.map((_, i) => ({ startDate: startDate[i], endDate: endDate[i] }));
    }
    return { startDate, endDate };
  });

  dateRanges.forEach(({ startDate, endDate }) => {
    if (startDate && endDate) {
      expect(startDate).toBeInstanceOf(Date);
      expect(endDate).toBeInstanceOf(Date);
      expect(startDate.getTime()).toBeLessThanOrEqual(endDate.getTime());
    }
  });
});

test('Longform content ends with a period', () => {
  const longContent = [
    content.about,
    ...content.experience.map((e) => e.tasks),
    ...content.work.map((w) => w.description),
    ...content.skills.map((s) => s.description),
  ].flat().filter((item) => !!item);

  longContent.forEach((text) => {
    expect(text.trim()).toMatch(/\.$/);
  });
});
