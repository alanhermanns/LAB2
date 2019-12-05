const mongoose = require('mongoose');

const schema = mongoose.Schema({
  bowlDepth : {
    type : Number,
    required : true,
    min: 0,
    max: 100
  },
  clean : {
    type : Boolean,
    required : true,
  },
  stressAround : {
    type : Number,
    required : true,
  }
});

module.exports = mongoose.model('Table', schema);
