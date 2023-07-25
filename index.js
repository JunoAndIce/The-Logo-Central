// TODO: Inquire user for creating a logo
// TODO: Save all inputs to create an SVG file using said parameters

// inquirer modules 
const inquirer = require('inquirer');
const maxLength = require('inquirer-maxlength-input-prompt')

const fs = require('fs');

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
  .then(function(answers){
    createObject(answers);
  });
};

function createObject(data) {
  const fileName =`${data.shape}.svg`
  if (data.shape === 'Square'){
    const newLogo = new Square
    (
      'rect x="10" y="10" width="30" height="30"',
      data.text,
      data.sColor,
      data.tColor
    )
    writeToFile(fileName, newLogo)
  } else if (data.shape === 'Circle') {
    const newLogo = new Circle
    (
      'circle cx="25" cy="75" r="20"',
      data.text,
      data.sColor,
      data.tColor
    )
    writeToFile(fileName, newLogo)
  } else if (data.shape === 'Triangle') {
    const newLogo = new Triangle
    (
      'polygon points="250,60 100,400 400,400"',
      data.text,
      data.sColor,
      data.tColor
    )
    writeToFile(fileName, newLogo)
  }
  
}

  // Create a function to write SVG file
  function writeToFile(fileName, data) {
    
    console.log(`Your ${fileName}.svg is ready!`)

    // fs.writeFile(fileName, generateSVG(data), error => {
    //   if(error) {
    //     return console.log(error);
    //   } else{
    //     console.log(`Your ${data.shape}.svg is ready!`)
    //   }
    // });
  };

// Function call to initialize app
init();