import { Request, Response } from 'express';
// import { User } from '../models/User';
import Joi from 'joi';
import jwt from 'jsonwebtoken';

let allusers: { name: any; email: any; }[] = []

export const login = (req: Request, res: Response) => {
    const email = req.body.email
    const password = req.body.password
    const token = createToken(email);
    res.send(`Token ${token}`);
}

export const createUser = (req: Request, res: Response) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required()
    });
    console.log(req.body)
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Request body is empty' });
    }

    const { error, value } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const newUser = { name: value.name, email: value.email };
    allusers.push(newUser)
    res.json(newUser);
};

export const getUsers = (req: Request, res: Response) => {
    const users = allusers;
    res.json(users);
};

export const createToken = (email: string): string => {
    const secretKey = process.env.JWT_KEY || 'default_secret';
    const token = jwt.sign({ email: email, Web: "Rock Dev" }, secretKey, { expiresIn: '1h', algorithm: 'HS256' });
    return token;
};