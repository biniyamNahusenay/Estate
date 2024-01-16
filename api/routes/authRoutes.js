const express = require('express');
const { Signup, Signin, google } = require('../controllers/authControllers');
const router = express.Router();

router.post('/signup',Signup);
router.post('/signin',Signin);
router.post('/google',google);

module.exports = router;