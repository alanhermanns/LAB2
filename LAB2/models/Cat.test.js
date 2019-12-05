const Cat = require('./Cat');

describe('Cat model', () => {
  describe('cat name and claws', () => {
    it('requires a cat name', () => {
      const cat = new Cat({
        claws: true,
        zestForLife : true
      });
      const { errors } = cat.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
    it('knows the cats claws are true', () => {
      const cat = new Cat({
        claws: true,
        zestForLife : true
      });
      expect(cat.claws).toEqual(true);
    });
  });
});
