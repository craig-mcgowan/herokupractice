//Import the connected mongoose object
const { Types } = require("mongoose");
const mongoose = require("./connection");

/*----------------------------------
   Model
----------------------------------*/

const { Schema, model } = mongoose;
const projectSchema = new Schema({
  year: { type: Number },
  jobId: {type: Number},
  name: {type: String},
  client: {type: String},
  stage: {type: String},
  sqFt: {type: Number},
  isActive: {type: Boolean},
  suite: {type: String},
  streetAddress: {type: String},
  city: {type: String},
  state: {type: String},
  zipCode: {type: String},
  projectValue: {type: Number},
  bidDueDate: { type: Date },
  image: { type: String },
  idNum: { type: String }
  
});




const Project = model("Project", projectSchema);

//Export the module
module.exports = Project;
