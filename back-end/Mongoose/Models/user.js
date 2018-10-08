const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userDescription: {
    type: String,
    trim: true
  },
  userFirstName: {
    type: String,
    trim: true,
    required: true
  },
  userLastName: {
    type: String,
    trim: true,
    required: true
  },
  pseudo: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  passWord: {
    type: String,
    required: true
  },
  userAdresse: {
    type: String,
    trim: true
  },
  userCity: {
    type: String,
    trim: true,
    required: true
  },
  postalCode: {
    type: Number,
    required: true
  },
  userCIN: {
    type: String,
    required: true
  },
  userRating: {
    type: Number
  },
  userTrocNbre: {
    type: Number
  },
  userPhoto: {
    type: String,
    trim: true
  }
});

const User = mongoose.model("Users", UserSchema);

module.exports = { User };
