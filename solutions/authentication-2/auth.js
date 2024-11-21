import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import {getUser, createUser} from './data/users.js'
dotenv.config();
const authRouter = express.Router();
const saltRounds = 12;



authRouter.post("/users", async (req, res) => {
    const {user, password} = req.body;

    const userRecord = await getUser(user);
    if (userRecord) {
        res.status(500).json({"error": "user already exists"});
        return;
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
        await createUser(user, hashedPassword);
        res.status(200).json({"message": `created ${user}`});
    } catch (e) {
        res.status(500).json({"error": e.message});
    }
})


authRouter.post("/login", async (req, res) => {
    const {user, password} = req.body;

    try {
        const userRecord = await getUser(user);

        const match = await bcrypt.compare(password, userRecord.hashedpassword);
        if (match) {

            const token = jwt.sign(
                userRecord, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.cookie('token', token, {
                httpOnly: true,  // cannot be accessed by JavaScript!
                secure: true,    // only send over HTTPS
                sameSite: 'strict',  // prevent CSRF attacks
            })

            res.json({ message: 'Login successful' });
        } else {
            res.status(500).json({"error": "error logging in"});
        }
    } catch (e) {
        res.status(500).json({"error": e.message});
        return;
    }


})

authRouter.post("/logout", async (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,  // cannot be accessed by JavaScript!
        secure: true,    // only send over HTTPS
        sameSite: 'strict',  // prevent CSRF attacks
    })
    res.status(200).json({"message": "logged out"})
})

const verify = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json(
            {message: "no token provided"})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json(
                {message: "invalid token"})
        }

        req.user = decoded;
        next();
    })

}

export {authRouter, verify};