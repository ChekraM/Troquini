const mongoose = require("mongoose");

const TrocSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true
  },
  photo: {
    type: String,
    trim: true
  },
  typeO: {
    type: String,
    trim: true
  },
  typeS: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  isValidated: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  dateCreationTroc: {
    type: String,
    trim: true
  },
  vuesNbre: {
    type: Number
  },
  userid: {
    type: String,
    trim: true
  },
});

const Troc = mongoose.model("troc", TrocSchema);

module.exports = { Troc };
