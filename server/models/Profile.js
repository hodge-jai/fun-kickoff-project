const mongoose = require("mongoose");

const timeSlot = new mongoose.Schema({ start: Date, end: Date });

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
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  availability: {
    type: [timeSlot],
  },
  photo: {
    type: String,
  },
});

module.exports = User = mongoose.model("Profile", profileSchema);
