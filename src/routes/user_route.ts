import { Router, Request, Response, NextFunction } from "express";
// import { CREA} from 'http-status-codes'
const userRoutes = Router();

userRoutes.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: "Emanoel" }];
    res.status(200).send(users);
});

userRoutes.get('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
});

userRoutes.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(201).send(newUser);
});

userRoutes.put('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(200).send(modifiedUser);
});

userRoutes.delete('/users/uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    res.sendStatus(200);
});

export default userRoutes;