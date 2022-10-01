// TODO: Include packages needed for this application
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const promptUser = async () => {
    try {
        const answers = await inquirer.prompt(questions);
        await writeFile('./generated-readme/README.md', generateMarkdown(answers))
    } catch(e) {
        console.log(e)
    }
}
const questions = [

    {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project.',
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project: ',
    
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
    
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and use cases for your project.', 
    
},
{
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any.',
    
},
{
    type: 'input',
    name: 'contributing',
    message: 'What contributions would you like from other developers on your project?'
},
{
    type: 'input',
    name: 'tests',
    message: 'Link or list any test cases for your project.', 
    
},
{
    type: 'list',
    name: 'license',
    message: 'What license will you be using for this project?',
    choices: ['Apache', 'GPL-3.0', 'MIT',],
    
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username.',
    
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email.',
},
];



// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
