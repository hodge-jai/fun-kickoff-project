const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  description: {
    type: String,
  },
  address: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  availability: {
    type: [Date],
  },
  photo: {
    type: String,
  }
});

module.exports = User = mongoose.model("Profile", profileSchema);
