import inquirer from 'inquirer';

// Create an IIFE this will run as our main
(async function () {
  inquirer.prompt([
    {
      type: 'checkbox',
      name: 'Tools to use?',
      choices: ['ESLint', 'StyleLint', 'Prettier'],
    },
  ]);
})();
