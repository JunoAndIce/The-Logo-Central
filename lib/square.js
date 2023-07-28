// TODO: Create shapes class
// TODO: Create Square, Circle, and Triangle children that inherit from Shapes
// TODO: Export them all.

const Shapes = require('./shapes');

// Children
class Square extends Shapes {
  constructor(text, sColor, tColor) {
    
    if (text.length > 3)
    {
      throw new Error("Logo text is too long");
    }
    super(text, sColor, tColor);
  }

  render() {
    return `<rect x="10" y="10" width="30" height="30" fill="${this.sColor}" />`;
  }
}

module.exports = Square;