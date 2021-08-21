import { Solution } from './day01'

test('Year 2015, 1 day,  puzzle 1', () => {
  expect(new Solution('(()(()(').processPart1()).toBe(3);
  expect(new Solution('))(').processPart1()).toBe(-1);
});

test('Year 2015, 1 day,  puzzle 2', () => {
  expect(new Solution(')').processPart2()).toBe(1);
  expect(new Solution('()())').processPart2()).toBe(5);
});
