const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  dateOfBirth: {
    type: Date,
    default: null
  },
  availability: {
    type: [Date],
    default: []
  },
  photo: {
    type: String,
    default: "",
  },
});

module.exports = Profile = mongoose.model("Profile", profileSchema);
