const express = require('express');
const {getProfiles} = require('../controllers/profiles');

const router = express.Router();

const app = express();

router.route('/').get(getProfiles);

module.exports = router;