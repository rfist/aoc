import { Solution } from './day12'

test('Year 2015, day 12,  puzzle 1', () => {
  expect(new Solution('[1,2,3]').processPart1()).toBe(6);
  expect(new Solution(`{"a":2,"b":4}`).processPart1()).toBe(6);
  expect(new Solution(`[[[3]]]`).processPart1()).toBe(3);
  expect(new Solution(`{"a":{"b":4},"c":-1}`).processPart1()).toBe(3);
  expect(new Solution('[]').processPart1()).toBe(0);
  expect(new Solution('{}').processPart1()).toBe(0);
});

test('Year 2015, day 12,  puzzle 2', () => {
  expect(new Solution('[1,2,3]').processPart2()).toBe(6);
  expect(new Solution(`[1,{"c":"red","b":2},3]`).processPart2()).toBe(4);
  expect(new Solution(`{"d":"red","e":[1,2,3,4],"f":5}`).processPart2()).toBe(0);
  expect(new Solution('[1,"red",5]').processPart2()).toBe(6);
});
