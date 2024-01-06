const express = require('express');
const audioController = require('../controllers/audioController')

const router = express.Router();

router.get('/', audioController.getAllAudio);


module.exports  = router;