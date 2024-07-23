const { program } = require('commander');

program
  .version('1.0.0')
  .description('A simple CLI tool')
  .option('-n, --name <name>', 'specify your name')
  .option('-a, --age <age>', 'specify your age');

// Parse the command line arguments
program.parse(process.argv);

// Access options
const options = program.opts();

if (options.name) {
  console.log(`Hello, ${options.name}!`);
}
if (options.age) {
  console.log(`You are ${options.age} years old.`);
}