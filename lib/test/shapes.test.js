//TODO: Import from shapes
// TODO: Create test suite for checking if render properly returned string.

const Shapes = require('../shapes');

describe('Shapes', () => {
  describe('Rendering', () => {
    test('Should throw error if render() is called on parent class.', () => {
      const shape = new Shapes();
      expect(shape.render).toThrowError(Error);
    });
  });

  describe('Validate Color', () => {
    test('Should throw error if validateColor() is called on parent class.', () => {
      const shape = new Shapes();
      expect(shape.validateColor).toThrowError(Error);
    });
  });
});