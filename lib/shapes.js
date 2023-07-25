// TODO: Create shapes class
// TODO: Create Square, Circle, and Triangle children that inherit from Shapes
// TODO: Export them all.

// Main Shapes Class 
class Shapes{
  constructor(shape, sColor, tColor) {
    this.shape = shape;
    this.sColor = sColor;
    this.tColor = tColor;
  }

  printMetaData() {
    console.log(`Your shape will be a ${this.shape} with ${this.sColor} coloring and ${this.tColor} text color.`);
  }
}

// Children
class Square extends Shapes {
  constructor(shape, sColor, tColor) {
    super(shape, sColor, tColor);
  }

  printMetaData() {
    console.log(`Your shape will be a ${this.shape} with ${this.sColor} coloring and ${this.tColor} text color.`);
  }
}

// Children
class Circle extends Shapes {
  constructor(shape, sColor, tColor) {
    super(shape, sColor, tColor);
  }

  printMetaData() {
    console.log(`Your shape will be a ${this.shape} with ${this.sColor} coloring and ${this.tColor} text color.`);
  }
}

// Children
class Triangle extends Shapes {
  constructor(shape, sColor, tColor) {
    super(shape, sColor, tColor);
  }

  printMetaData() {
    console.log(`Your shape will be a ${this.shape} with ${this.sColor} coloring and ${this.tColor} text color.`);
  }
}