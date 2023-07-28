//TODO: Import from shapes
// TODO: Create test suite for checking if render properly returned string.

const Shapes = require('../shapes');


describe('Shapes', () => {
  // TODO: Add a comment describing this test.
  // This test checks if the instance created called blogpost is an instance of the class BlogPost.

  describe('Check Shape', () => {
    it('Should throw error if render() is called on parent class.', () => {
      const shape = () => new Shapes();
      expect(shape.render()).toThrowError(Error);
    });
  });
});
