const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

// @route POST /profile/edit
// @desc Register user
// @access Public
exports.editProfile = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    description,
    address,
    dateOfBirth,
    availability,
    photo,
  } = req.body;

  const profile = await Profile.findOneAndUpdate(
    { _id: req.user.profile._id },
    { $set: req.body },
    {
      upsert: true,
      new: true,
    }
  );

  if (!profile) {
    res.status(404);
    throw new Error("Profile doesn't exist");
  }
  res.status(200).json({
    success: {
      profile: {
        id: profile._id,
      },
    },
  });
});

// @route GET /profile/load
// @desc Get user data with valid token
// @access Private
exports.loadProfile = asyncHandler(async (req, res, next) => {
  const profile = await User.findById(req.user.id, 'profile');

  if (!profile) {
    res.status(401);
    throw new Error("Not authorized");
  }

  res.status(200).json({
    success: {
      profile: {
        id: profile._id,
        firstName: profile.firstName,
        lastName: profile.lastName,
        description: profile.description,
        address: profile.address,
        dateOfBirth: profile.dateOfBirth,
        availability: profile.availability,
        photo: profile.photo,
      },
    },
  });
});
