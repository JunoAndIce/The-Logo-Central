//TODO: Import from shapes
// TODO: Create test suite for checking if render properly returned string.

const Square = require('../square');

describe('Square', () => {
  describe('Rendering', () => {
    test('render() should come out as the required string for the SVG document.', () => {
      const square = new Square(
        'ZTV',
        'Blue',
        'Orange'
      );
      expect(square.render()).toBe(`<rect x="75" y="30" width="150" height="150" fill="${square.sColor}"/>`);
    });
  });

  describe('Validate Color', () => {
    test('Should expect real colors to always come out true and fake colors to come out false', () => {
      const square = new Square(
        'ZTV',
        'Poop',
        'Orange'
      );
      expect(square.validateColor(square.sColor)).toBe(false);
    });
  });
});