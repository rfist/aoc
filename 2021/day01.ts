import chalk from 'chalk';
import fs from 'fs';
import R from 'ramda';

export class Solution {
  public input: any;
  constructor(input: any) {
    this.input = input;
  }

  public processPart1(): number {
    const inputReport =  R.pipe(R.split('\n'),R.map(Number))(this.input);
    const { inc } = inputReport.reduce((reducer, currenValue) => {
      if (currenValue > reducer.prev && reducer.prev !== 0) {
        reducer.inc++
      }
        return {...reducer, prev: currenValue}
    }, {prev: 0, inc: 0})
    return inc;
  }

  public processPart2(): number {
    const inputReport =  R.pipe(R.split('\n'),R.map(Number))(this.input);
    const { inc } = inputReport.reduce((reducer, currenValue, currentIndex) => {
      if (inputReport.length >= currentIndex + 2){
      const currentSum = currenValue + inputReport[currentIndex + 1] + inputReport[currentIndex + 2];
      if (currentSum > reducer.prev && reducer.prev !== 0) {
        reducer.inc++
      }
        return {...reducer, prev: currentSum}
      }
      return reducer;
    }, {prev: 0, inc: 0})
    return inc;
  }
}

if (require.main === module) {
  const inputRaw: string = fs.readFileSync(`${__dirname}/puzzles/day01.txt`).toString();
  const solution: Solution = new Solution(inputRaw);

  console.log(`The number of times a depth measurement increases is ${chalk.yellow(solution.processPart1().toString())}`);
  console.log(`The number of times the sum of measurements in this sliding window increases is ${chalk.yellow(solution.processPart2().toString())}`);
}
