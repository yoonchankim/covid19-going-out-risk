import express from "express"
import {main, analysis,home} from "../controllers/userController"
const globalRouter=express.Router();
globalRouter.get("/main",main);
globalRouter.get("/analysis",analysis);
globalRouter.get("/",home);
export default globalRouter;