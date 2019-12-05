const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name : {
    type : String,
    required: true,
  },
  ears : {
    type : Number,
    required : true,
  },
  claws : {
    type : Boolean,
    required : true,
  },
  zestForLife : {
    type : Boolean,
    required : true,
  }
});

module.exports = mongoose.model('Cat', schema);
