//Import the connected mongoose object
const { Types } = require("mongoose");
const mongoose = require("./connection");

/*----------------------------------
   Model
----------------------------------*/

const { Schema, model } = mongoose;
const projectSchema = new Schema({
  year: Number,
  jobNum:  Number,
  name:  String,
  client:  String,
  stage:  String,
  sqFt:  Number,
  isActive:  Boolean,
  suite:  String,
  streetAddress:  String,
  city:  String,
  state:  String,
  zipCode:  String,
  projectValue:  Number,
  bidDueDate: Date,
  image: String,
  jobId: String,
  fullAddress:  String,
  org: String
});




const Project = model("Project", projectSchema);

//Export the module
module.exports = Project;
