// TODO: Create shapes class
// TODO: Create Square, Circle, and Triangle children that inherit from Shapes
// TODO: Export them all.


const Shapes = require('./shapes');

// Children
class Triangle extends Shapes {
  constructor(text, sColor, tColor) {

    if (text.length > 3)
    {
      throw new Error("Logo text is too long");
    }
    
    super(text, sColor, tColor);
  }

  render() {
    return `<polygon points="250,60 100,400 400,400" fill="${this.sColor}" />`;
  }
}

module.exports = Triangle;