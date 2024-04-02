import middlewareFunction from '../middleware/index';
import express, { Router } from 'express';
import usersRouter from './users.routes';

const router: Router = express.Router();
const app = express();

app.use(middlewareFunction);

router.use('/users', usersRouter);

export default router;