const Table = require('./Table');

describe('Table model', () => {
  describe('table name and claws', () => {
    const table = new Table({
      rows: 5,
      stressAround: true
    });
    const { errors } = table.validateSync();
    it('requires columns', () => {
      expect(errors.columns.message).toEqual('Path `columns` is required.');
    });
    it('recognizes a table without claws', () => {
      expect(table.claws).toEqual();
    });
  });
});
