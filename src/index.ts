import express, {Request, Response, NextFunction} from "express";
import userRoutes from "./routes/user_route";
import statusRoutes from "./routes/status_route";

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(statusRoutes);

app.listen(3001, () => {
    console.log('Server running!');
});