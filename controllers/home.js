/*----------------------------------
   Dependencies
----------------------------------*/
const express = require("express");

/*----------------------------------
   Create Router
----------------------------------*/
const router = express.Router();

/*----------------------------------
   Routes
----------------------------------*/

//localhost:3000
//HOME
router.get("/", (req, res) => {
  res.render("home/home.ejs");
});

module.exports = router;
