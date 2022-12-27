const axios = require('axios');
const {User,Skill} = require('../db.js')
const fs = require('fs');


//hacer pedidos
async function getInfo(req, res, next) {
    try {
    } catch (error) {
        console.log(error)
    }
}


async function getUsers(req, res, next) {
    try {
        const users = await User.findAll({
            include: Skill
        });
        res.json(users);
    } catch (error) {
        next(error);
    }
}

async function getUserById(req, res, next) {
    try {
        const user = await User.findByPk(req.params.id, {
            include: Skill
        });
        res.json(user);
    } catch (error) {
        next(error);
    }
}

async function createUser(req, res, next) {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        const user = await User.findByPk(req.params.id);
        await user.update(req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        const user = await User.findByPk(req.params.id);
        await user.destroy();
        res.json(user);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getInfo
}