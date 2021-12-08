import chalk from 'chalk';
import fs from 'fs';
import R from 'ramda';

export class Solution {
  public input: any;
  constructor(input: any) {
    this.input = input;
  }

  public processPart1(): number {
    const inputCorse =  R.pipe(R.split('\n'),R.map(R.split(' ')))(this.input);
    const coord = {x:0, y:0};
    inputCorse.forEach(([direction, distance]) => {
      switch (direction){
        case 'forward':
          coord.x += +distance;
        break;
        case 'up':
          coord.y -= +distance;
        break;
        case 'down':
          coord.y += +distance;
        break;
      }
    })
    return coord.x * coord.y;
  }

  public processPart2(): number {
    const inputCorse =  R.pipe(R.split('\n'),R.map(R.split(' ')))(this.input);
    const coord = {x:0,y:0, aim:0};
    inputCorse.forEach(([direction, value]) => {
      switch (direction){
        case 'forward':
          coord.x += +value;
        coord.y += coord.aim * +value;
        break;
        case 'up':
          coord.aim -= +value;
        break;
        case 'down':
          coord.aim += +value;
        break;
      }
    })
    return coord.x * coord.y;
  }
}

if (require.main === module) {
  const inputRaw: string = fs.readFileSync(`${__dirname}/puzzles/day02.txt`).toString();
  const solution: Solution = new Solution(inputRaw);

  console.log(`Multiply final horizontal position by final depth is ${chalk.yellow(solution.processPart1().toString())}`);
  console.log(`Multiply final horizontal position by final depth using aim value is ${chalk.yellow(solution.processPart2().toString())}`);
}
