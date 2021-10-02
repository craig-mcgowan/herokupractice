

//___________________
//Dependencies
//___________________
require("dotenv").config(); // load env vars
const express = require("express"); // import express
const morgan = require("morgan"); // import morgan
const methodOverride = require("method-override");
const ProjectRouter = require("./controllers/project");

/*----------------------------------
   APP Object
----------------------------------*/
const app = express();
//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static("public"));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); // returns middleware that only parses JSON 

//use method override
app.use(methodOverride("_method")); // allow POST, PUT and DELETE from a form

app.use(morgan('tiny'));

app.use("/projects", ProjectRouter)
//___________________
// Routes
//___________________
//localhost:3000
//HOME
app.get("/", (req, res) => {
  res.render("project/home.ejs")
});

//___________________
//Listener
//___________________
const PORT = process.env.PORT
app.listen(PORT, () => console.log("express is listening on:", PORT));
