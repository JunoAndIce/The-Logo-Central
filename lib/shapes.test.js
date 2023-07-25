//TODO: Import from shapes
// TODO: Create test suite for checking if render properly returned string.

const Shapes = require('./shapes');
const Square = require('./square');


describe('Square', () => {
  // TODO: Add a comment describing this test.
  // This test checks if the instance created called blogpost is an instance of the class BlogPost.

  describe('Check Shape', () => {
    it('should return false if shape is not a square', () => {
      const square = () => new Square('rect', 'FFFF');
      expect(square).toBe('rect');
    });
  });

  describe('Check Text Length', () => {
    it('should return error if text is more than 3 character', () => {
      const square = () => new Square('rect', 'FFFF');
      expect(square).toThrowError(Error);
    });
  });
});
