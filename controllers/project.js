// *Dependencies
const express = require("express");
const Project = require("../models/project")

/*----------------------------------
   Router
----------------------------------*/
const router = express.Router();


//Index Route
router.get("/", (req, res) => {
  Project.find({}, (err, projects) => {
    res.render("project/index.ejs", { projects });
  })
});

//New Route
router.get("/new", (req, res) => {
  
  Project.count({}, (err, count) => {
    res.render("project/new.ejs", { nextProjectNum: count + 1 })
  })
}
)

//Destroy Route


//Update Route

//Create Route

//Edit Route


//Show Route
router.get("/:id", (req, res) => {
  const {id} = req.params
  Project.findById(id, (err, project) => {
    res.render("project/show.ejs" ,{ project})
  })
 } 
)



/*----------------------------------
   Exports Router
----------------------------------*/

module.exports = router
