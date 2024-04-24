const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/index');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
