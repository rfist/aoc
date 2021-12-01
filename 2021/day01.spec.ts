import { Solution } from './day01'

test('Year 2021, day 1,  puzzle 1', () => {
  expect(new Solution(`199
200
208
210
200
207
240
269
260
263`).processPart1()).toBe(7);
});

test('Year 2021, day 1,  puzzle 1', () => {
  expect(new Solution(`199
200
208
210
200
207
240
269
260
263`).processPart2()).toBe(5);
});
