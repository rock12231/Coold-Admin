import { Request, Response, NextFunction } from 'express';

const middlewareFunction = (req: Request, res: Response, next: NextFunction) => {
    // Middleware logic here
    // console.log('Middleware is working');
    next();
};

export default middlewareFunction;
