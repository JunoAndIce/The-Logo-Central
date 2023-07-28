// TODO: Create shapes class
// TODO: Create Square, Circle, and Triangle children that inherit from Shapes
// TODO: Export them all.

const Shapes = require('./shapes');

// Circle Children
class Circle extends Shapes {
  constructor(text, sColor, tColor) {
    
    if (text.length > 3)
    {
      throw new Error("Logo text is too long");
    }

    super(text, sColor, tColor);
  }
  
  render() {
    return `circle cx="25" cy="75" r="20" fill="${this.sColor}"`;
  }
}


module.exports = Circle;
