// TODO: Inquire user for creating a logo
// TODO: Save all inputs to create an SVG file using said parameters


const inquirer = require('inquirer');
const maxLength = require('inquirer-maxlength-input-prompt')
const fs = require('fs');
// const generateSVG = require('./generateSVG');

const Shapes = require('./lib/shapes');
const Square = require('./lib/square');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');

inquirer.registerPrompt('max-input', maxLength);

const questions = [
  {
    type: 'max-input',
    name: 'text',
    maxLength: 3,
    message: 'Enter text for your logo:'

  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color for your text (Keyword or Hexadecimal):'
    
  },
  {
    type: 'rawlist',
    name: 'shape',
    message: 'Choose a shape for your logo:',
    choices: ['Square', 'Circle', 'Triangle']
  },  
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color for your shape (Keyword or Hexadecimal):'
    
  },  
];

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(answers){
    const fileName =`${answers.shape}.svg`

    console.log(fileName)

    createObject(answers);

      // writeToFile(fileName, answers);
  });
};

function createObject(data) {
  if (data.shape === 'Square'){

    const newLogo = new Square
    (
      'rect x="10" y="10" width="30" height="30"',
      data.text,
      data.sColor,
      data.tColor
    )
    
  }
}

  // Create a function to write SVG file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateSVG(data), error => {
      if(error) {
        return console.log(error);
      } else{
        console.log(`Your ${data.shape}.svg is ready!`)
      }
    });
  };

// Function call to initialize app
init();