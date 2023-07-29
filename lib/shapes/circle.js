// TODO: Create shapes class
// TODO: Create Square, Circle, and Triangle children that inherit from Shapes
// TODO: Export them all.

const Shapes = require('./shapes');
var validateColor = require("validate-color").default;

// Circle Children
class Circle extends Shapes {
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
    return `<circle cx="150" cy="100" r="100" fill="${this.sColor}"/>`;
  }
}


module.exports = Circle;
