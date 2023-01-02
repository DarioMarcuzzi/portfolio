const {Router} = require('express');
const router = Router();
const {getSkills,createSkill,updateSkill,deleteSkill} = require('../controllers/contSkills.js');

router.get('/', getSkills);
router.post('/', createSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

module.exports = router;

