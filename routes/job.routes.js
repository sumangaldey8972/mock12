const express = require("express");
const jobModel = require("../models/job.models");

const app = express.Router();

// get function with filter and date=====================
app.get("/", async (req, res) => {
  let { filterByRole, sortByDate } = req.query;
  try {
    if (filterByRole && sortByDate) {
      const job = await jobModel.find({ role: filterByRole });
      if (sortByDate === "asc") {
        job.sort((a, b) => new Date(a.postedAt) - new Date(b.postedAt));
      } else if (sortByDate === "desc") {
        job.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
      } else {
        res.status(401).send({
          message: "Cannot perform this operation",
        });
      }
      res.send({ message: "data fetch successfull", data: job });
    } else if (filterByRole) {
      const job = await jobModel.find({
        role: filterByRole,
      });
      res.send({ message: "data fetch successfull", data: job });
    } else if (sortByDate) {
      const job = await jobModel.find();
      if (sortByDate === "asc") {
        job.sort((a, b) => new Date(a.postedAt) - new Date(b.postedAt));
      } else if (sortByDate === "desc") {
        job.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
      } else {
        res.status(401).send({
          message: "Cannot perform this operation",
        });
      }
      res.send({ message: "data fetch successfull", data: job });
    } else {
      let { page, size } = req.query;
      if (!page) {
        page = 1;
      }
      if (!size) {
        size = 10;
      }
      let limit = parseInt(size);
      const job = await jobModel.find().limit(limit);
      res.send({ message: "data fetch successfull", data: job });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

// search by tech stack =================================
app.get("/searchByTechStack", async (req, res) => {
  let { query } = req.query;
  //   console.log(query);
  try {
    let job = await jobModel.find({ language: query });
    res.send({ message: "data fetch successfull", data: job });
  } catch (e) {
    res.status(500).send({ message: err });
  }
});

app.post("/", async (req, res) => {
  try {
    let newJob = await jobModel.create(req.body);
    res.status(200).send({ message: "Job Add Successfull", data: newJob });
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

module.exports = app;
