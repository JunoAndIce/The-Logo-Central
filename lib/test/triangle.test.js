//TODO: Import from shapes
// TODO: Create test suite for checking if render properly returned string.

const Triangle = require('../triangle');

describe('Shapes', () => {
  describe('Rendering', () => {
    test('render() should come out as the required string for the SVG document.', () => {
      const triangle = new Triangle(
        'TTV',
        'Blue',
        'Orange'
      );
      expect(triangle.render()).toBe(`<polygon points="150 ,0  50 ,200  250, 200" fill="${triangle.sColor}" />`);
    });
  });

  describe('Validate Color', () => {
    test('Should expect real colors to always come out true and fake colors to come out false', () => {
      const triangle = new Triangle(
        'TTV',
        'Orange',
        'Snakeskin'
      );
      expect(triangle.validateColor(triangle.tColor)).toBe(false);
    });
  });
});