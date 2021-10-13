/*----------------------------------
   Dependencies
----------------------------------*/
const express = require("express"); // import express
const middleware = require("./utils/middleware"); 


/*----------------------------------
   APP Object
----------------------------------*/
const app = express();
middleware(app)

//___________________
//Listener
//___________________
const PORT = process.env.PORT
app.listen(PORT, () => console.log("express is listening on:", PORT));
