const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

// @route POST /auth/register
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

// @route GET /auth/user
// @desc Get user data with valid token
// @access Private
exports.loadProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findById(req.user.profile);

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
