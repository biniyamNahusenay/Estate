const express = require('express');
const { Signup } = require('../controllers/authControllers');
const router = express.Router();

router.post('/signup',Signup);

module.exports = router;