// TODO: Create shapes class
// TODO: Create Square, Circle, and Triangle children that inherit from Shapes
// TODO: Export them all.

const Shapes = require('./shapes');
var validateColor = require("validate-color").default;

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
    return validateColor(color);
  }

  render() {
    return `<rect x="75" y="30" width="150" height="150" fill="${this.sColor}"/>`;
  }
}

module.exports = Square;