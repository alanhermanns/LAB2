const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name : {
    type : String,
    required: true,
  },
  rows : {
    type : Number,
    required : true,
  },
  columns : {
    type : Number,
    required : true,
  },
  stressAround : {
    type : Boolean,
    required : true,
  }
});

module.exports = mongoose.model('Table', schema);
