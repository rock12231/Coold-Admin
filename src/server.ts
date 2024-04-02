import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import indexRouter from './routes/index';
// import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
