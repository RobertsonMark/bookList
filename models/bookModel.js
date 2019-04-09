var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
  title: {type: String},
  author: {type: String},
  genre: {type: String},
  read: {type: Boolean},
  dateCompleted: {type: Date}
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('book', Schema);
