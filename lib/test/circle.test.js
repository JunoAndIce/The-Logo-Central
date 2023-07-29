//TODO: Import from shapes
// TODO: Create test suite for checking if render properly returned string.

const Circle = require('../circle');

describe('Circle', () => {
  describe('Rendering', () => {
    test('render() should come out as the required string for the SVG document.', () => {
      const circle = new Circle(
        'TTV',
        'Blue',
        'Orange'
      );
      expect(circle.render()).toBe(`<circle cx="150" cy="100" r="100" fill="${circle.sColor}"/>`);
    });
  });

  describe('Validate Color', () => {
    test('Should expect real colors to always come out true and fake colors to come out false', () => {
      const circle = new Circle(
        'TTV',
        'Orange',
        'Snakeskin'
      );
      expect(circle.validateColor(circle.tColor)).toBe(false);
    });
  });
});