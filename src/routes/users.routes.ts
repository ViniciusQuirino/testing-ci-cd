import express from "express";

const users = express.Router();

users.get("/", (req, res) => {
  return res.status(200).json("Hello World!");
});

export default users;
