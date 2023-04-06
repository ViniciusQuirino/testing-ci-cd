import express from "express";
import {
  createUserController,
  userLoginController,
} from "../controllers/users.controller";

const users = express.Router();

users.post("/", createUserController);
users.post("/login", userLoginController);

export default users;
