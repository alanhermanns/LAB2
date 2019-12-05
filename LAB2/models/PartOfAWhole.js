const mongoose = require('mongoose');

const schema = mongoose.Schema({
  within : {
    type : Boolean,
    required : true,
  },
  size : {
    type : Number,
    required : true,
  },
  description : {
    type : String,
    required : true,
  }
});

module.exports = mongoose.model('PartOfAWhole', schema);
