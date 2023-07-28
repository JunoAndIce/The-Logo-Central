// TODO: Inquire user for creating a logo
// TODO: Save all inputs to create an SVG file using said parameters

// inquirer modules 
const inquirer = require('inquirer');
const maxLength = require('inquirer-maxlength-input-prompt')

const fs = require('fs');
const generateSVG = require('./lib/generateSVG');

// Shape Objects 
const Square = require('./lib/square');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');


// const generateSVG = require('./generateSVG');

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
    .then(function (answers) {
      console.log(answers);
      createObject(answers);
    });
};

function createObject(data) {
  const fileName = `${data.shape}.svg`
  let newLogo;

  if (data.shape === 'Square') {
    newLogo = new Square
      (
        data.text,
        data.shapeColor,
        data.textColor
      )
  } else if (data.shape === 'Circle') {
    newLogo = new Circle
      (
        data.text,
        data.shapeColor,
        data.textColor
      )
  } else if (data.shape === 'Triangle') {
    newLogo = new Triangle
      (
        data.text,
        data.shapeColor,
        data.textColor
      )
  }
  // console.log(newLogo);

  if (newLogo.validateColor(data.shapeColor) === 'false' || newLogo.validateColor(data.textColor) === 'false') {
    throw new Error(`One of ${data.shapeColor} or ${data.textColor} is not a real color.`);
  }
  else {
    writeToFile(fileName, newLogo);
  };

}

// Create a function to write SVG file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateSVG(data), error => {
    if (error) {
      return console.log(error);
    } else {
      console.log(`Your ${fileName} is ready!`);
    }
  });
};

// Function call to initialize app
init();