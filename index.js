const chalk = require('chalk');
const exercise1 = require('./src/exercise1');
const exercise2 = require('./src/exercise2');
// const exercise3 = require('./src/exercise3');
// const exercise4 = require('./src/exercise4');

const exercise0 = {
  run: () => {
  	console.log(exercise2.reverseYolo( [ 'T', 'R', 'O', 'N', 'K', 'G', '3', '3', '0', [7], 7 ,7]));
    return exercise2.reverseYolo( [ 'T', 'R', 'O', 'N', 'K', 'G', '3', '3', '0']);
  }
};


const exercise = exercise0;

const input = [];

console.log(chalk.yellow('RESULT', exercise.run(input)));