const OldOakTree = require('./OldOakTree');

describe('OldOakTree model', () => {
  describe('oak trees name, people gathered around, and status as an idol', () => {
    const oaktree = new OldOakTree({
      peopleGatheredAround : 5,
      paganIdol: true
    });
    const { errors } = oaktree.validateSync();
    it('requires name', () => {
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
    it('knows how many people are gathered around the oaktree', () => {
      expect(oaktree.peopleGatheredAround).toEqual(5);
    });
  });
});
