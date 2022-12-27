const axios = require('axios');
const {Skill} = require('../db.js');

async function getSkills(req, res, next) {
    try {
        const skills = await Skill.findAll();
        res.json(skills);
    } catch (error) {
        next(error);
    }
}

async function createSkill(req, res, next) {
    try {
        const skill = await Skill.create(req.body);
        res.json(skill);
    } catch (error) {
        next(error);
    }
}

async function updateSkill(req, res, next) {
    try {
        const skill = await Skill.findByPk(req.params.id);
        await skill.update(req.body);
        res.json(skill);
    } catch (error) {
        next(error);
    }
}

async function deleteSkill(req, res, next) {
    try {
        const skill = await Skill.findByPk(req.params.id);
        await skill.destroy();
        res.json(skill);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getSkills,
    createSkill,
    updateSkill,
    deleteSkill
};