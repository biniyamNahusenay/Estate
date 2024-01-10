const express = require('express');
const { test } = require('../controllers/userControllers');
const router = express.Router();

router.get('/',test);

module.exports = router;