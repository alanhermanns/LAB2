const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name : {
    type : String,
    required: true,
  },
  poisonous : {
    type : Boolean,
    required : true,
  },
  paganIdol : {
    type : Boolean,
    required : true,
  },
  peopleGatheredAround : {
    type : Number,
    required : true,
  }
});

module.exports = mongoose.model('OldOakTree', schema);
