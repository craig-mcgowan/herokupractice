///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection");
const Project = require("./project");

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////
const computeProperties = (arr) => {
  for (object of arr) {
    let year = object.year.toString().slice(2)
    let jobNum = object.jobNum.toString()
    while (jobNum.length < 3) jobNum = "0" + jobNum
    let jobId = year + "-" + jobNum
    
    let fullAddress = `${object.streetAddress}, ${object.city}, ${object.state} ${object.zipCode}`;
    object.jobId = jobId
    object.fullAddress = fullAddress
  }
  
  
}



// Make sure code is not run till connected
mongoose.connection.on("open", () => {
  

  // Run any database queries in this function
  const startProjects = [
    {
      year: 2021,
      jobNum: 001,
      name: "8th Floor Demo",
      client: "ABC Realty",
      stage: "Construction",
      sqFt: 26000,
      isActive: true,
      suite: "Suite 800",
      streetAddress: "100 Main Street",
      city: "Philadelphia",
      state: "PA",
      zipCode: "19102",
      projectValue: 132582,
      image: "",
      org: "ABC Construction"

    },
    {
      year: 2021,
      jobNum: 002,
      name: "Placeholder & Placeholder Law Expansion",
      client: "P&P Associates",
      stage: "Bidding",
      sqFt: 1500,
      isActive: true,
      suite: "Suite 120",
      streetAddress: "1100 Market Street",
      city: "Billings",
      state: "MT",
      zipCode: "59101",
      projectValue: 59400,
      image: "",
      org: "ABC Construction"

    },
    {
      year: 2021,
      jobNum: 003,
      name: "Amenity Center",
      client: "XYZ Managment",
      stage: "Preconstruction",
      sqFt: 1500,
      isActive: true,
      suite: "Suite 120",
      streetAddress: "2600 Walnut Street",
      city: "Chicago",
      state: "Il",
      zipCode: "60007",
      projectValue: 1800000,
      image: "",
      org: "ABC Construction",
    },
  ];
  computeProperties(startProjects)
  // Delete all projects
  Project.remove({}, (err, data) => {
    // Seed Starter Projects
    Project.create(startProjects, (err, data) => {
      // log the create projects to confirm
      console.log("--------PROJECTS CREATED----------");
      console.log(data);
      console.log("--------PROJECTS CREATED----------");

      // close the DB connection
      mongoose.connection.close();
    });
  });


});
