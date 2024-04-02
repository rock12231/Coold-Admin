import express, { Request, Response } from 'express';
import { getUsers, createUser,login } from '../controllers/user.controller';

const router = express.Router();

router.post('/login', login);
router.post('/register', createUser);
router.get('/getall', getUsers);

export default router;
