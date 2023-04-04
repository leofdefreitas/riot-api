import express from "express";
import { Request, Response, NextFunction } from "express";
import { test } from "./routes/index";

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const app = express();
const PORT = process.env.PORT || 1234;


function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`[${Date.now()}] ${req.method} ${req.url}`);
    next();
}

app.use(logger);
app.use(express.json());
app.use("/test", test);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));