const Sink = require('./Sink');

describe('Sink model', () => {
  describe('sink, stress around, and bowl depth', () => {
    const sink = new Sink({
      bowlDepth : -1, 
      stressAround : 5,
      paganIdol: true
    });
    const sink2 = new Sink({
      name : 'Fred',
      clean : true,
      bowlDepth : 4, 
      stressAround : 5,
    });
    const { errors } = sink.validateSync();
    it('requires clean property', () => {
      expect(errors.clean.message).toEqual('Path `clean` is required.');
    });
    it('requires a minimum depth of 0', () => {
      expect(errors.bowlDepth.message).toEqual('Path `bowlDepth` (-1) is less than minimum allowed value (0).');
    });
    it('can be validated', () => {
      expect(sink2.validateSync()).toBeUndefined();
    });
  });
});
