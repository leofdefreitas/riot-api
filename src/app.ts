import express from "express";
import { Request, Response, NextFunction } from "express";
import { tryout } from "./routes/index";


export default function () {
    if (process.env.NODE_ENV !== "production") {
        require("dotenv").config();
    }

    const app = express();

    function logger(req: Request, res: Response, next: NextFunction) {
        console.log(`[${Date.now()}] ${req.method} ${req.url}`);
        next();
    }

    app.use(logger);
    app.use(express.json());
    app.use("/tryout", tryout);
    
    return app;
}