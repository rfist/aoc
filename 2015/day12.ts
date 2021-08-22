import chalk from 'chalk';
import fs from 'fs';

export class Solution {
  public input: any;
  constructor(input: any) {
    this.input = JSON.parse(input);
  }

  public processPart1(): number {
    const parse = (input: Array<never> | any): any => {
      if (Number.isInteger(input)){
        return input as number;
      }
      if (typeof input === 'string') return 0;
      return (Array.isArray(input) ? input : Object.values(input)).reduce((a, b)=>a+parse(b), 0);
    }

    return parse(this.input);
  }

  public processPart2(): number {
    const parse = (input: Array<never> | any): any => {
      if (Number.isInteger(input)){
        return input as number;
      }
      if (typeof input === 'string') return 0;
      if (!Array.isArray(input) && Object.values(input).indexOf('red') > -1) return 0;
      return (Array.isArray(input) ? input : Object.values(input)).reduce((a, b)=>a+parse(b), 0);
    }

    return parse(this.input);
  }
}

if (require.main === module) {
  const inputRaw: string = fs.readFileSync(`${__dirname}/puzzles/day12.txt`).toString();
  const solution: Solution = new Solution(inputRaw);

  console.log(`Sum of all numbers in the document is ${chalk.yellow(solution.processPart1().toString())}`);
  console.log(`Sum of all numbers without "red" value in the document is ${chalk.yellow(solution.processPart2().toString())}`);
}
