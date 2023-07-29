// TODO: Create shapes class
// TODO: Create Square, Circle, and Triangle children that inherit from Shapes
// TODO: Export them all.


const Shapes = require('./shapes');
var validateColor = require("validate-color").default;

// Children
class Triangle extends Shapes {
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
    return `<polygon points="150 ,0  50 ,200  250, 200" fill="${this.sColor}"/>`;
  }
}

module.exports = Triangle;