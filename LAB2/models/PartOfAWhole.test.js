const PartOfAWhole = require('./PartOfAWhole');

describe('Part of a whole model', () => {
  describe('within, size, and description', () => {
    const falsePart = new PartOfAWhole({
      size: 4,
      description : 'Totally autonomous'
    });
    const { errors } = falsePart.validateSync();
        
    it('requires within property to be required', () => {
      expect(errors.within.message).toEqual('Path `within` is required.');
    });
    it('requires description property to be valid', () => {
      const part = new PartOfAWhole({
        size : -1, 
        within : true,
        description : []
      });
      const { errors } = part.validateSync();
      expect(errors.description.message).toEqual('Cast to String failed for value "[]" at path "description"');
    });
  });
});
