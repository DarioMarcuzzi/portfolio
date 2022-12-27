const { Router } = require('express');
const router = Router();

const users = require('./users.js');
const skills = require('./skills.js');

router.use('/users', users);
router.use('/skills', skills);

module.exports = router;
