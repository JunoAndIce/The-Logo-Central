// TODO: Create shapes class
// TODO: Create Square, Circle, and Triangle children that inherit from Shapes
// TODO: Export them all.


const Shapes = require('./shapes');

// Children
class Triangle extends Shapes {
  constructor(shape, text, sColor, tColor) {
    super(text, sColor, tColor);
    this.shape = shape;
  }

  printMetaData() {
    console.log(`Your shape will be a ${this.shape} with ${this.sColor} coloring and ${this.tColor} text color.`);
  }
}

module.exports = Triangle;