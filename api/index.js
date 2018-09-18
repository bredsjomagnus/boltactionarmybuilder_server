/* eslint-disable no-alert */

const express = require('express');
const router = express.Router();

require('./routes/user')(router);
require('./routes/army')(router);

module.exports = router;
