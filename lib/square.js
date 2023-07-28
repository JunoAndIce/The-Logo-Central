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

  validateColor(color){
    return CSS.supports('color',`${color}`)
  }

  render() {
    return `<rect x="50" y="25" width="200" height="200" fill="${this.sColor}" />`;
  }
}

module.exports = Square;