import getRandomNum from '../getRandomNum.js';

const task = 'What is the result of the expression?';

function getCalc() {
  // diapozone of random nums is randomly choosen
  const operand1 = getRandomNum(-30, 30);
  const operand2 = getRandomNum(1, 30);

  const mathOperands = ['+', '-', '*'];
  const operator = mathOperands[getRandomNum(0, mathOperands.length - 1)];

  const question = `${operand1}${operator}${operand2}`;

  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };

  const rightAnswer = operations[operator](operand1, operand2).toString();

  return { task, question, rightAnswer };
}

export { getCalc, task };
