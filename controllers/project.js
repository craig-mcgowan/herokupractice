// *Dependencies
const express = require("express");
const Project = require("../models/project")

/*----------------------------------
   Router
----------------------------------*/
const router = express.Router();

/*----------------------------------
   Router middleware
----------------------------------*/
//authorization middleware
router.use((req, res, next) => {
  if (req.session.loggedIn) {

    next();
  } else {
    res.redirect("/user/login");
  }
});

/*----------------------------------
   Routes
----------------------------------*/

const computeProperties = (arr) => {
  for (object of arr) {
    
    let year = object.year.toString().slice(2);
    let jobNum = object.jobNum.toString();
    while (jobNum.length < 3) jobNum = "0" + jobNum;
    let jobId = year + "-" + jobNum;

    let fullAddress = `${object.streetAddress}, ${object.city}, ${object.state} ${object.zipCode}`;
    object.jobId = jobId;
    object.fullAddress = fullAddress;
    console.log(object);
  }

};
//Index Route
router.get("/", (req, res) => {
  Project.find({}, (err, projects) => {
    computeProperties(projects)
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


router.delete(`/:id`, (req, res) => {
  const { id } = req.params
  Project.findByIdAndRemove(id, (err, project) => {
      res.redirect(`/projects`)
  })
})


//Update Route
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const {org, isActive} = req.body
  req.body.isActive = req.body
  req.body.org = org ? org : "ABC Construction";
  req.body.isActive = isActive === "on";
  Project.findByIdAndUpdate(id, req.body, { new: true }, (err, project) => {
    res.redirect("/projects")
  })
 } 
)


//Create Route
router.post("/", (req, res) => {
  req.body.org = req.session.org
  let { org, isActive } = req.body
  req.body.org = org ? org : "ABC Construction"
  req.body.isActive = isActive === "on"
  Project.create(req.body, (err, project) => {
    res.redirect("/projects")
  })
 } 
)
//Edit Route
router.get(`/:id/edit`, (req, res) => {
  const { id } = req.params
  Project.findById(id, (err, project) => {
    res.render(`project/edit.ejs`, { project }) 
  })    
})


//Show Route
router.get("/:id", (req, res) => {
  const {id} = req.params
  Project.findById(id, (err, project) => {
    
    res.render("project/show.ejs", { project })
  })
 } 
)



/*----------------------------------
   Exports Router
----------------------------------*/

module.exports = router
