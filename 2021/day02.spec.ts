import { Solution } from './day02';

test('Year 2021, day 2,  puzzle 1', () => {
  expect(
    new Solution(`forward 5
down 5
forward 8
up 3
down 8
forward 2`).processPart1(),
  ).toBe(150);
});

test('Year 2021, day 1,  puzzle 1', () => {
  expect(
    new Solution(`forward 5
down 5
forward 8
up 3
down 8
forward 2`).processPart2(),
  ).toBe(900);
});
