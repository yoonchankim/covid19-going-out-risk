import express from "express"
import morgan from "morgan"
import "./db";
import "./models/covidValue";
import globalRouter from "./routers/globalRouter"
const logger=morgan("dev");
const covid = require('covid19-kr');
const PORT=3000;
const app=express();
console.log(process.cwd());
app.use(logger);
app.use("/",globalRouter);
const handleListening=()=>console.log(`Server listening on port http://localhost:${PORT}`);
app.listen(PORT,handleListening);

