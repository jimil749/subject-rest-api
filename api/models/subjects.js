const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 professor: {
  type: String,
  trim: true,
  required: true
 }
});


module.exports = mongoose.model('Subject', SubjectSchema)