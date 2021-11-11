const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  editProfile,
  loadProfile,
} = require('../controllers/profile');

router.route('/edit').post(protect, loginProfile);

router.route('/profile').get(protect, loadProfile);

module.exports = router;
