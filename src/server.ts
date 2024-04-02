const debug = require('debug')('app');
import config from 'config';
import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import morga from 'morgan';
import indexRouter from './routes/index';
import middlewareFunction from './middleware/index';
// import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(middlewareFunction);
app.use(morga('dev'));

  // console.log(config.get("mail..pass"));
debug(">>>>>"+config.get("name"));
debug(">>>>>"+config.get("mail"));

const env = app.get("env");
if (env === "development") {
  console.log("Development environment");
  app.use(morga("dev")); //short common dev combined tiny 
}
if (env === "testing") {
  console.log("Testing environment");
  app.use(morga("dev"));
}
if (app.get("env") === "production") {
  console.log("Production environment");
}

// app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'));
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
