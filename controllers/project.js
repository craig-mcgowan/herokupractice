// *Dependencies
const express = require("express");
const Project = require("../models/project")

/*----------------------------------
   Router
----------------------------------*/
const router = express.Router();

router.get("/", (req, res) => {
  Project.find({}, (err, projects) => {
    res.render("project/index.ejs", { projects });
  })
});

module.exports = router
