const express = require("express");
const userModel = require("../models/user.models");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let allUser = await userModel.find();
    res.send({ data: allUser });
  } catch (err) {
    res.status(500).send({ message: "Server error" });
  }
});

app.post("/", async (req, res) => {
  try {
    let { email } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      res.status(401).send({ message: "Email already exists" });
    } else {
      let newUser = await userModel.create(req.body);
      res.status(200).send({ message: "signUp successfull", data: newUser });
    }
  } catch (err) {
    res.status(500).send({ message: "Server error" });
  }
});

module.exports = app;
