/*----------------------------------
   Dependencies
----------------------------------*/

require("dotenv").config(); // load env vars
const express = require("express"); // import express
const morgan = require("morgan"); // import morgan
const methodOverride = require("method-override");
const ProjectRouter = require("../controllers/project");
const UserRouter = require("../controllers/user")
const HomeRouter = require("../controllers/home")
const session = require("express-session");
const MongoStore = require("connect-mongo");
const Mongostore = ("connect-mongo")

/*----------------------------------
   Middleware Label
----------------------------------*/
const middleware = (app) => {
  //use public folder for static assets
  app.use(express.static("public"));
  // populates req.body with parsed info from forms 
  app.use(express.urlencoded({ extended: false })); // 
  app.use(express.json()); // returns middleware that only parses JSON

  //use method override
  app.use(methodOverride("_method")); // allow POST, PUT and DELETE from a form
  app.use(morgan("tiny"));
  // app.use(
  //   session({
  //     secret: process.env.SECRET,
  //     store: MongoStore.create({ mongoURL: process.env.DATABASE_URL }),
  //     saveUninitialized: true,
  //     resave: false,
  //   })
  // )
  app.use("/projects", ProjectRouter);
  // app.use("/user", UserRouter)
  app.use("/", HomeRouter)
}

module.exports = middleware
