const express = require('express');
const { Signup } = require('../controllers/authControllers');
const router = express.Router();

router.post('/',Signup);

module.exports = router;