
import {data} from "../../users.json";
import { User, Skill } from "../db.js";

async function preChar (req, res, next) {
    try {
        const users = await User.findAll({
            include: Skill
        });
        if (users.length === 0) {
            const users = await User.bulkCreate(data);
            res.json(users);
        } else {
            res.json(users);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    preChar
}